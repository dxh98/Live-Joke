//js 模块化封装

export function sum(a, b) {
    return a + b;
}

export function getName() {
    return "小红";
}

// export default 表示当前文件的默认导出
export default function add(a) {
    return a + 5;
}