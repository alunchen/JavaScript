// 最新的ECMAScript 标准定义了8种数据类型

/**   7 种 原始类型， 使用 typeof 运算符检查 
 *    undefined   typeof instance === 'undefined'
 *    Boolean     typeof instance === 'boolean'
 *    Number      typeof instance === 'number'
 *    String      typeof instance === 'string'
 *    null        typeof instance === 'object'
 *    BigInt      typeof instance === 'bigint'
 *    symbol      typeof instance === 'symbol'
 */

/**   object
 *    Object      typeof instance === 'object'
 *        任何 constructed 对象实例的特殊非数据结构类型，也用做数据结构：
 *    new Object，new Array，new Map，new Set，new WeakMap，new WeakSet，
 *    new Date，和几乎所有通过 new keyword 创建的东西
 *    
 */




/**   原始值( primitive values )
 * 
 *      除 Object 以外的所有类型都是不可变的（值本身无法被改变）。例如，与 C 语言不同，
 *  JavaScript 中字符串是不可变的（译注：如，JavaScript 中对字符串的操作一定返回了一个
 *  新字符串，原始字符串并没有被改变）。我们称这些类型的值为“原始值”。
 * 
 */

/**   布尔类型
 * 
 *    布尔表示一个逻辑实体，可以有两个值：true 和 false。
 */

/**   Null 类型
 * 
 *    Null 类型只有一个值： null，更多详情可查看 null 和 Null 。
 * 
 */

/**   Undefined 类型
 * 
 *    一个没有被赋值的变量会有个默认值 undefined，更多详情可查看 undefined 和 Undefined。
 */

/**   数字类型
 * 
 *      根据 ECMAScript 标准，JavaScript 中只有一种数字类型：基于 IEEE 754 标准的双精度 64 位
 *  二进制格式的值（-(253 -1) 到 253 -1）。它并没有为整数给出一种特定的类型。除了能够表示浮点
 *  数外，还有一些带符号的值：+Infinity，-Infinity 和 NaN (非数值，Not-a-Number)。
 * 
 * 
 *      要检查值是否大于或小于 +/-Infinity，你可以使用常量 Number.MAX_VALUE 和 Number.MIN_VALUE。
 *  另外在 ECMAScript 6 中，你也可以通过 Number.isSafeInteger() 方法还有 Number.MAX_SAFE_INTEGER 
 *  和 Number.MIN_SAFE_INTEGER 来检查值是否在双精度浮点数的取值范围内。 超出这个范围，JavaScript 
 *  中的数字不再安全了，也就是只有 second mathematical interger 可以在 JavaScript 数字类型中正确表现
 * 
 *      数字类型中只有一个整数有两种表示方法： 0 可表示为 -0 和 +0（"0" 是 +0 的简写）。 在实践中，这
 *  也几乎没有影响。 例如 +0 === -0 为真。 但是，你可能要注意除以0的时候：
 *      42 / +0; // Infinity
 *      42 / -0; // -Infinity
 * 
 *      尽管一个数字常常仅代表它本身的值，但 JavaScript 提供了一些 位运算符。 这些位运算符和一个单一数字
 *  通过位操作可以用来表现一些布尔值。然而自从 JavaScript 提供其他的方式来表示一组布尔值（如一个布尔值数组
 *  或一个布尔值分配给命名属性的对象）后，这种方式通常被认为是不好的。位操作也容易使代码难以阅读，理解和维
 *  护， 在一些非常受限的情况下，可能需要用到这些技术，比如试图应付本地存储的存储限制。 位操作只应该是用来
 *  优化尺寸的最后选择。
 * 
 */

/**   BigInt 类型
 * 
 *      BigInt类型是 JavaScript 中的一个基础的数值类型，可以用任意精度表示整数。使用 BigInt，您可以安全地存储
 *  和操作大整数，甚至可以超过数字的安全整数限制。BigInt 是通过在整数末尾附加 n 或调用构造函数来创建的。
 * 
 *      通过使用常量Number.MAX_SAFE_INTEGER，您可以获得可以用数字递增的最安全的值。通过引入 BigInt，您可以操作
 *  超过Number.MAX_SAFE_INTEGER的数字。您可以在下面的示例中观察到这一点，其中递增Number.MAX_SAFE_INTEGER会返回
 *  预期的结果:
 * 
 *      > const x = 2n ** 53n;
 *      9007199254740992n
 *      > const y = x + 1n;
 *      9007199254740993n
 * 
 * 
 * 
 *      可以对BigInt使用运算符+、*、-、**和%，就像对数字一样。BigInt 严格来说并不等于一个数字，但它是松散的。
 *    
 *      在将BigInt转换为Boolean时，它的行为类似于一个数字：if、||、&&、Boolean 和!。
 * 
 *      BigInt不能与数字互换操作。否则，将抛出TypeError。
 */

/**   字符串类型
 * 
 *      JavaScript 的字符串类型用于表示文本数据。它是一组16位的无符号整数值的“元素”。在字符串中的每个元素占据
 *  了字符串的位置。第一个元素的索引为 0，下一个是索引 1，依此类推。字符串的长度是它的元素的数量。

        不同于类 C 语言，JavaScript 字符串是不可更改的。这意味着字符串一旦被创建，就不能被修改。但是，可以基于
    对原始字符串的操作来创建新的字符串。例如：

          获取一个字符串的子串可通过选择个别字母或者使用 String.substr().
          两个字符串的连接使用连接操作符 (+) 或者 String.concat().

    注意代码中的“字符串类型”！
    可以使用字符串来表达复杂的数据。以下是一些很好的性质：

          容易连接构造复杂的字串符
          字符串容易被调试(你看到的往往在字符串里)
          字符串通常是许多 APIs 的常见标准 (input fields, local storage values, XMLHttpRequest当使用responseText等的时候回应) 而且他只能与字符串一同使用。
        
        
        使用约定，字符串一般可以用来表达任何数据结构。这不是一个好主意。例如，使用一个分隔符，可以模拟一个列表
      （而 JavaScript 数组可能更适合）。不幸的是，当分隔符用于列表中的元素时，列表就会被破坏。 可以选择转义
    字符，等等。所有这些都需要约定，并造成不必要的维护负担。

      表达文本数据和符号数据时候推荐使用字符串。当表达复杂的数据时，使用字符串解析和适当的缩写。
 * 
 * 
 * 
 * 
 */

/**   符号类型
 *    
        符号(Symbols)是 ECMAScript 第6版新定义的。符号类型是唯一的并且是不可修改的, 
      并且也可以用来作为 Object 的 key 的值(如下). 在某些语言当中也有类似的原子类型
      (Atoms). 你也可以认为为它们是 C 里面的枚举类型. 更多细节请看 Symbol 和 Symbol 。
 */