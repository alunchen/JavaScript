const arr = [{
        value: 'fkana_db',
        label: 'fkana_db'
    },
    {
        value: 'fkana_base',
        label: 'fkana_base'
    },
    {
        value: 'fkana_feat',
        label: 'fkana_feat'
    },
    {
        value: 'fkana_inter',
        label: 'fkana_inter'
    },
    {
        value: 'fkana_them',
        label: 'fkana_them'
    },{
        value: 'fkana_db',
        label: 'fkana_db'
    },
    {
        value: 'fkana_base',
        label: 'fkana_base'
    },
    {
        value: 'fkana_feat',
        label: 'fkana_feat'
    },
    {
        value: 'fkana_inter',
        label: 'fkana_inter'
    },
    {
        value: 'fkana_them',
        label: 'fkana_them'
    },
    {
        value: 'fkana_db',
        label: 'fkana_db'
    },
    {
        value: 'fkana_base',
        label: 'fkana_base'
    },
    {
        value: 'fkana_feat',
        label: 'fkana_feat'
    },
    {
        value: 'fkana_inter',
        label: 'fkana_inter'
    },
    {
        value: 'fkana_them',
        label: 'fkana_them'
    },
    {
        value: 'fkana_seals',
        label: 'fkana_seals'
    },
    {
        value: 'fkana_db',
        label: 'fkana_db'
    },
    {
        value: 'fkana_base',
        label: 'fkana_base'
    },
    {
        value: 'fkana_feat',
        label: 'fkana_feat'
    },
    {
        value: 'fkana_fxq',
        label: 'fkana_fxq'
    },
    {
        value: 'fkana_inter',
        label: 'fkana_inter'
    },
    {
        value: 'fkana_them',
        label: 'fkana_them'
    },
    {
        value: 'fkana_seals',
        label: 'fkana_seals'
    },
    {
        value: 'fkana_xd',
        label: 'fkana_xd'
    },

    {
        value: 'fkana_db',
        label: 'fkana_db'
    },
    {
        value: 'fkana_base',
        label: 'fkana_base'
    },
    {
        value: 'fkana_feat',
        label: 'fkana_feat'
    },
    {
        value: 'fkana_inter',
        label: 'fkana_inter'
    },
    {
        value: 'fkana_them',
        label: 'fkana_them'
    },

    {
        value: 'fkana_db',
        label: 'fkana_db'
    },
    {
        value: 'fkana_base',
        label: 'fkana_base'
    },
    {
        value: 'fkana_feat',
        label: 'fkana_feat'
    },
    {
        value: 'fkana_fxq',
        label: 'fkana_fxq'
    },
    {
        value: 'fkana_inter',
        label: 'fkana_inter'
    },
    {
        value: 'fkana_them',
        label: 'fkana_them'
    },
    {
        value: 'fk_guest',
        label: 'fk_guest'
    },

    {
        value: 'fkana_db',
        label: 'fkana_db'
    },
    {
        value: 'fkana_base',
        label: 'fkana_base'
    },
    {
        value: 'fkana_feat',
        label: 'fkana_feat'
    },
    {
        value: 'fkana_inter',
        label: 'fkana_inter'
    },
    {
        value: 'fkana_them',
        label: 'fkana_them'
    },
    {
        value: 'fk_guest',
        label: 'fk_guest'
    },

    {
        value: 'fkana_db',
        label: 'fkana_db'
    },
    {
        value: 'fkana_base',
        label: 'fkana_base'
    },
    {
        value: 'fkana_feat',
        label: 'fkana_feat'
    },
    {
        value: 'fkana_inter',
        label: 'fkana_inter'
    },
    {
        value: 'fkana_them',
        label: 'fkana_them'
    },
    {
        value: 'fkana_seals',
        label: 'fkana_seals'
    },

    {
        value: 'fkana_db',
        label: 'fkana_db'
    },
    {
        value: 'fkana_base',
        label: 'fkana_base'
    },
    {
        value: 'fkana_feat',
        label: 'fkana_feat'
    },
    {
        value: 'fkana_inter',
        label: 'fkana_inter'
    },
    {
        value: 'fkana_them',
        label: 'fkana_them'
    },
    {
        value: 'fkana_seals',
        label: 'fkana_seals'
    },

    {
        value: 'fkana_db',
        label: 'fkana_db'
    },
    {
        value: 'fkana_base',
        label: 'fkana_base'
    },
    {
        value: 'fkana_feat',
        label: 'fkana_feat'
    },
    {
        value: 'fkana_inter',
        label: 'fkana_inter'
    },
    {
        value: 'fkana_them',
        label: 'fkana_them'
    },
    {
        value: 'fkana_seals',
        label: 'fkana_seals'
    },

    {
        value: 'fkana_db',
        label: 'fkana_db'
    },
    {
        value: 'fkana_base',
        label: 'fkana_base'
    },
    {
        value: 'fkana_feat',
        label: 'fkana_feat'
    },
    {
        value: 'fkana_inter',
        label: 'fkana_inter'
    },
    {
        value: 'fkana_them',
        label: 'fkana_them'
    },
    {
        value: 'fkana_seals',
        label: 'fkana_seals'
    },
]
let newArr = [];
let obj = {};
arr.forEach(row => {
    if (!obj[row.value]) {
        obj[row.value] = true;
        newArr.push(row)
    }
})
console.log(newArr)