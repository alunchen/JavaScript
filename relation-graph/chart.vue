<template>
  <div class="wrapper">
    <t-space>
      <t-radio-group
        v-model="busType"
        default-value="1"
        @change="onChange"
      >
        <t-radio-button value="">全部</t-radio-button>
        <t-radio-button value="3">基础能力</t-radio-button>
        <t-radio-button value="4">基础功能组件</t-radio-button>
        <t-radio-button value="5">风控产品清单</t-radio-button>
        <t-radio-button value="6">合规产品清单</t-radio-button>
      </t-radio-group>
      <t-cascader
        v-model="value"
        style="width: 320px"
        :options="options"
        check-strictly
        clearable
        @change="onSelectChange"
      />
    </t-space>

    <div id="chart-wrapper">
      <RelationGraph
        ref="relationGraph$"
        :options="graphOptions"
        :on-node-click="onNodeClick"
        :on-node-expand="onNodeExpand"
        :on-node-collapse="onNodeCollapse"
      >
        <template #node="{node}">
          <div
            v-if="node.data.type === 'btn-more-from' || node.data.type === 'btn-more-to'"
            class="my-node more-btn"
            :class="`level-${node.data.level}`"
            @click="showMoreNodes(node)"
          >
            {{ node.text }}
          </div>
        </template>
      </RelationGraph>
      <!-- :on-node-expand="onNodeExpand" -->
    </div>
    <t-loading
      attach="#chart-wrapper"
      show-overlay
      :z-index="100"
      :loading="loading"
    ></t-loading>
  </div>
</template>
<script setup lang="ts">
import { Space as TSpace, RadioGroup as TRadioGroup, RadioButton as TRadioButton, Cascader as TCascader, Loading as TLoading } from 'tdesign-vue-next';

import { onMounted, ref, reactive } from 'vue';
// @ts-ignore
import RelationGraph, { RGNode, RGUserEvent, RGLink } from 'relation-graph/vue3';

import { getProductLineDiagram } from '@/api/overview';

// import { JsonData } from './dataJSON';
import { retTypes } from '@/types/common';

const busType = ref<string>('');

const value = ref('');

const loading = ref<boolean>(false);
const rootData = {
  id: 'root',
  text: '产品谱系图',
  level: 'root',
  children: [],
};

let leftLines = reactive<any[]>([]);
let rightLines = reactive<any[]>([]);

const sortField = ['微信', '手Q', '智慧鹅', '商企付'];

const relationGraph$ = ref<RelationGraph>();

const __graph_json_data: any = reactive({});

const options = ref<any[]>([]);

const graphOptions: any = {
  layouts: [
    {
      label: '中心',
      layoutName: 'tree',
      layoutClassName: 'seeks-layout-tree',
      defaultJunctionPoint: 'border',
      from: 'left',
      // 'centerOffset_x': -50,
      // 'centerOffset_y': 0,
      min_per_height: '40',
      max_per_height: '50',
      // levelDistance: '200',
      // levelDistance: '200,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300',
      levelDistance: '200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200',
    },
  ],
  defaultExpandHolderPosition: 'right',
  defaultLineShape: 4,
  defaultJunctionPoint: 'lr',
  defaultNodeShape: 1,
  // defaultNodeWidth: '80',
  defaultNodeHeight: '30',
  defaultNodeBorderColor: '#0052d9',
  defaultNodeBorderWidth: 1,
  defaultNodeColor: '#fff',
  defaultNodeFontColor: '#000',
  defaultLineColor: '#0052d9',
};


// const nodeColorList = ['#0288D1', '#03A9F4', '#03A9F4', '#4FC3F7', '#0091EA'];
// const lineColorList = [];

// 筛选需要显示的节点
const showFilterNodes = (val: any[], key: string) => {
  if (!relationGraph$.value) {
    return;
  }
  const _all_nodes = relationGraph$.value.getInstance().getNodes();
  _all_nodes.forEach((thisNode: any) => {
    let _isHideThisLine = false;
    if (val.length > 0 && val.indexOf(thisNode.data[key]) < 0) {
      _isHideThisLine = true;
    }
    if (key === 'id' && thisNode.id === 'root') {
      _isHideThisLine = false;
    }
    Object.assign(thisNode, {
      opacity: _isHideThisLine ? 0.1 : 1,
    });
  });
  relationGraph$.value.getInstance().dataUpdated();
};


const onChange = () => {
  if (!relationGraph$.value) {
    return;
  }
  let bustypeList = [];
  if (!busType.value) {
    bustypeList = [];
  } else {
    bustypeList.push(busType.value);
  }
  showFilterNodes(bustypeList, 'nodeType');
};

const getAllChildNodesId = (nodeList: any[]) => {
  const result: any[] = [];
  nodeList.forEach((item) => {
    const { value, children } = item;
    result.push(value);
    if (Array.isArray(children) && children.length > 0) {
      result.push(...getAllChildNodesId(children));
    }
  });
  return result;
};

const getParentNodesId = (node: any) => {
  const result: any[] = [];
  if (!!node && node.getParent()) {
    const parent = node.getParent();
    result.push(parent.data.value);
    result.push(...getParentNodesId(parent));
  }
  return result;
};

const onSelectChange = (val: any, ctx: any) => {
  let arr: any[] = [];
  let currentNode = null;
  if (!val) {
    arr = [];
  } else {
    arr = [ctx.node.data];
    currentNode = ctx.node;
  }
  const childNodesIdList = getAllChildNodesId(arr);
  const parentNodesIdList = getParentNodesId(currentNode);
  const nodesIdList = [...childNodesIdList, ... parentNodesIdList];
  showFilterNodes(nodesIdList, 'id');
};


const onNodeClick = (node: RGNode, e: RGUserEvent): boolean => {
  console.log(node, e);
  return true;
};

const onNodeExpand = (node: RGNode, e: RGUserEvent): boolean => {
  console.log(node, e);
  if (!relationGraph$.value) {
    throw new Error('');
  }

  const graphInstance = relationGraph$.value.getInstance();
  const { targetTo } = node;
  const showRigthLines: any[] = [];
  const ids = getAllChildId(targetTo, true);
  showRigthLines.push(...filterRightLine(ids));
  // 显示隐藏节点中与rightLine中的link
  graphInstance.addLines(showRigthLines);
  showOrHideRightNodes();
  graphInstance.doLayout();

  return true;
};

const onNodeCollapse = (node: RGNode, e: RGUserEvent): boolean => {
  console.log(node, e);
  if (!relationGraph$.value) {
    throw new Error('');
  }
  const graphInstance = relationGraph$.value.getInstance();
  const allLines = graphInstance.getLinks();
  const { targetTo } = node;
  //
  const hideRigthLines: any[] = [];
  // 删除包含在right中的line
  const ids = getAllChildId(targetTo);
  hideRigthLines.push(...filterRightLine(ids));
  // 删除隐藏节点中与rightLine中的link
  for (const rightLine of hideRigthLines) {
    const { from, to } = rightLine;
    const line = allLines.find((item: any) => item.fromNode.id === from && item.toNode.id === to);
    if (line) {
      graphInstance.removeLinkById(line.seeks_id);
    }
  }
  showOrHideRightNodes();
  graphInstance.doLayout();
  return true;
};

const formatLeftChildNodes = (nodeList: any) => {
  let result: any = [];
  result = nodeList.map((parentNode: any) => {
    const { text, id, level, children } = parentNode;
    const childNode = {
      text,
      level,
      // color: nodeColorList[level - 1],
      // fontColor: '#fff',
      // color: '#fff',
      // fontColor: '#000',
      // borderColor: '#0052d9',
      // borderWidth: '1',
      styleClass: 'node-text',
      id,
      children: formatLeftChildNodes(children),
    };
    return childNode;
  });
  return result;
};

// const { left, right } = JsonData;
//
// const leftNodes = formatLeftChildNodes(left);
// rootData.children = leftNodes;

const formatRightChildNodes = (nodeList: any) => {
  let result: any = [];
  result = nodeList.map((parentNode: any) => {
    const { text, id, level } = parentNode;
    const childNode = {
      text,
      level,
      // color: '#fff',
      // fontColor: '#000',
      // borderColor: '#0052d9',
      // borderWidth: '1',
      styleClass: 'node-text',
      data: {
        type: 'right',
        level: '6',
        nodeType: '6',
      },
      id,
      children: [],
    };
    return childNode;
  });
  return result;
};
//
// const rightNodes = formatRightChildNodes(right);


const formatOptinos = (arr: any[]) => {
  let result: any = [];
  result = arr.map((item: any) => {
    const { text, id, children } = item;
    return {
      label: text,
      value: id,
      children: formatOptinos(children),
    };
  });
  return result;
};


const formatNodes = (arr: any[]) => {
  const result: any = [];
  arr.forEach((item: any) => {
    const { text, level, id, children, color, fontColor, styleClass, type = '' } = item;
    result.push({
      id,
      text,
      // color: '#4ea2f0',
      color,
      fontColor,
      styleClass,
      data: {
        nodeType: `${level}`,
        lineType: type,
        id,
        level,
      },
    });
    if (Array.isArray(children) && children.length > 0) {
      result.push(...formatNodes(children));
    }
  });
  return result;
};
// const nodes = [...formatNodes([rootData]), ...rightNodes];
// const nodes = [...formatNodes([rootData])];

const formatleftLines = (arr: any[], parentNodeId: string) => {
  const result: any = [];
  arr.forEach((item: any) => {
    const { id, children } = item;
    // if (id === 'root') {
    //   return false
    // }
    result.push({
      from: parentNodeId,
      to: id,
      color: '#01579B',
    });
    if (Array.isArray(children) && children.length > 0) {
      result.push(...formatleftLines(children, id));
    }
  });
  return result;
};
// const leftLines = formatleftLines([rootData], rootData.id);
// leftLines.shift();

const formatRightLines = (arr: any[], parentNodeId: string) => {
  const result: any = [];
  for (const item of arr) {
    const { id, children } = item;
    if (parentNodeId) {
      result.push({
        from: id,
        to: parentNodeId,
        color: '#0052d9',
        lineShape: '1',
      });
    }

    if (Array.isArray(children) && children.length > 0) {
      result.push(...formatRightLines(children, id));
    }
  }

  return result;
};

const sortDataByField = (data: any[]) => {
  const result: any[] = [];
  data.forEach((row: any) => {
    const { text } = row;
    const index = sortField.findIndex(val => val === text);
    result[index] = row;
  });
  return result;
};

const queryChartData = async () => {
  loading.value = true;
  try {
    const res = await getProductLineDiagram();
    const { retCode, data }:  retTypes = res;
    if (retCode === 0) {
      const chartJsonData = JSON.parse(data.userJson);
      const { left: leftArray, right } = chartJsonData;
      const left = sortDataByField(leftArray);
      //
      options.value = formatOptinos(left);
      console.log('options:', options);
      //  nodes
      const leftNodes = formatLeftChildNodes(left);
      rootData.children = leftNodes;
      const rightNodes = formatRightChildNodes(right);
      const nodes = [...formatNodes([rootData]), ...rightNodes];
      //  lines
      leftLines = formatleftLines([rootData], rootData.id);
      leftLines.shift();
      rightLines = formatRightLines(right, '');
      const allLines = [...leftLines, ...rightLines];
      //
      Object.assign(__graph_json_data, {
        rootId: rootData.id,
        nodes,
        lines: allLines,
      });
      setChartTitle();
      showGraph();
    }
  } catch (error) {
    loading.value = false;
  }
};


const setChartTitle = () => {
  __graph_json_data.nodes.forEach((thisNode: any) => {
    if (thisNode.text === '产品谱系图') {
      Object.assign(thisNode, {
        width: 150,
        height: 50,
        offset_x: -50,
        // color: 'rgb(13, 64, 63)',
        // color: 'rgb(1, 87, 155)', // #01579B
        // fontColor: '#fff',

      });
    }
  });
};

const showGraph = async () => {
  if (!relationGraph$.value) {
    return;
  }
  // loading.value = true;
  // 以上四行模拟获取股东、高管、分支机构、对外投资的过程可以改成异步从后台获取，在数据全部获取到并放入__graoh_json_data后再执行以下代码：
  const graphInstance = relationGraph$.value.getInstance();
  await graphInstance.setJsonData(__graph_json_data, true);
  await graphInstance.playShowEffect();
  await hideMoreNodes();
  showOrHideRightNodes();
  loading.value = false;
};

/**
 *  获取所有的子节点id
 *  nodeList
 *  isHide： 筛选出isHide为true的节点
 */
const getAllChildId = (nodeList: any[], isHide?: boolean) => {
  const result: any[] = [];
  let filterList = [...nodeList];
  if (isHide) {
    filterList = nodeList.filter(item => !item.isHide);
  }
  filterList.forEach((item) => {
    const { id, targetTo } = item;
    result.push(id);
    if (Array.isArray(targetTo) && targetTo.length > 0) {
      result.push(...getAllChildId(targetTo, isHide));
    }
  });
  return result;
};

// 在隐藏的节点或者子节点中筛选出属于right右边线中子节点
const filterRightLine = (ids: any[]) => {
  const hideRigthLines = [];
  const childNodesId = ids;
  for (const id of childNodesId) {
    const rightLine = rightLines.find((line: any) => line.from === id);
    if (rightLine) {
      hideRigthLines.push(rightLine);
    }
  }
  return hideRigthLines;
};


//
const hideMoreNodes = async () => {
  if (!relationGraph$.value) {
    return;
  }
  const graphInstance = relationGraph$.value.getInstance();
  // 获取所有的节点
  const allNodeData = graphInstance.getNodes();
  const allLines = graphInstance.getLinks();
  const newLines: any = [];
  const newNodes: any = [];
  //
  const hideRigthLines: any[] = [];
  allNodeData.forEach((node: any) => {
    // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
    if (!node.lot || !node.lot.childs) {
      return;
    }
    // console.log('xxxxx', node.id, node.lot.childs.length);
    // targetTo的节点
    const childNodes = node.targetTo;
    if (childNodes.length > 2) {
      const sliceToNode = childNodes.slice(2);
      // 隐藏子节点
      sliceToNode.forEach((item: any) => {
        // item.isHide = true;
        Object.assign(item, {
          isHide: true,
        });
      });
      // 删除包含在right中的line
      const ids = getAllChildId(sliceToNode);
      hideRigthLines.push(...filterRightLine(ids));
      newNodes.push({
        id: `${node.id}-to-more`,
        text: '...',
        color: 'transparent',
        alignItems: 'left',
        data: { type: 'btn-more-to', level: node.data.level },
      });
      newLines.push({
        from: node.id,
        to: `${node.id}-to-more`,
        color: '#01579B',
      });
    }
  });
  // 删除隐藏节点中与rightLine中的link
  for (const rightLine of hideRigthLines) {
    const { from, to } = rightLine;
    const line = allLines.find((item: any) => item.fromNode.id === from && item.toNode.id === to);
    if (line) {
      graphInstance.removeLinkById(line.seeks_id);
    }
  }
  graphInstance.addNodes(newNodes);
  graphInstance.addLines(newLines);

  await graphInstance.doLayout();
  await graphInstance.setZoom(90);
};

const showMoreNodes = (nodeObject: any) => {
  if (!relationGraph$.value) {
    return;
  }
  const showRigthLines: any[] = [];
  const graphInstance = relationGraph$.value.getInstance();
  if (nodeObject.data.type === 'btn-more-to') { // 如果点击的树右侧（当前布局from=left时）的节点
    const allSublingNodes = nodeObject.lot.parent.targetTo;
    allSublingNodes.forEach((node: any) => {
      // node.isHide = false;
      Object.assign(node, {
        isHide: false,
      });
    });
    // 删除包含在right中的line
    const ids = getAllChildId(allSublingNodes, true);
    showRigthLines.push(...filterRightLine(ids));
    graphInstance.removeNodeById(nodeObject.id);
  }
  // 显示隐藏节点中与rightLine中的link
  graphInstance.addLines(showRigthLines);
  graphInstance.doLayout();
};


/**
 * 显示或隐藏rightNodes中没有link的节点
 */
const showOrHideRightNodes = () => {
  if (!relationGraph$.value) {
    return;
  }
  const graphInstance = relationGraph$.value.getInstance();
  // 获取所有的节点
  const allNodeData = graphInstance.getNodes();
  //
  const allLines =  graphInstance.getLinks();
  const filterNodes = allNodeData.filter((node: RGNode) => node.data?.type === 'right');
  for (const node of filterNodes) {
    const line = allLines.find((line: RGLink) => line.toNode.id === node.id);
    Object.assign(node, {
      isHide: !line,
    });
  }
};

onMounted(() => {
  queryChartData();
});


</script>

<style lang="less" scoped>
.wrapper {
  // min-height: 840px;
  width: 100%;
}
#chart-wrapper {
  border: #efefef solid 1px;
  height: calc(100vh - 100px);
  width: 100%;
  margin-top: 12px;
  position: relative;
}
.my-node{
  height:32px;
  text-align: right;
  // border: #0052d9 solid 1px;
  // border-radius:5px;
  padding: 0 5px;
  line-height: 30px;
  color: #000;
  // background-color: ;
  // &.level-root {
  //   background-color: #0288D1
  // }
  // &.level-1 {
  //   background-color: #03A9F4
  // }
  // &.level-2 {
  //   background-color: #03A9F4
  // }
  // &.level-3 {
  //   background-color: #4FC3F7
  // }

  // &.level-4 {
  //   background-color: #0091EA
  // }
  // &:hover{
  //   border: rgba(15, 71, 255, 0.5) solid 1px;
  // }
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
}


:deep(.node-text){
  padding: 15px 5px;
}
:deep(.relation-graph .c-expand-positon-right span) {
  background-color: #0052d9 !important;
}
:deep(.relation-graph .rel-node) {
  width: max-content
}
</style>

