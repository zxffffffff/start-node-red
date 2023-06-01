# start-node-red
一个 Node-RED 脚手架，自定义 Node（html+js）并使用 Git 版本控制

## 说明
- https://github.com/node-red
- IBM 开源 Apache-2.0 license
- 可视化编程 Low-code，event-driven
- Built on Node.js


## 安装（Install）
- https://nodered.org/docs/getting-started/local

### 本地安装（Recommended）
- 全局安装 npm 包
    ```bash
    sudo npm install -g --unsafe-perm node-red
    ```
- 终端运行：
    ```bash
    node-red
    ```

### Docker安装
- docker run
    ```docker
    docker run -it -p 1880:1880 --name mynodered nodered/node-red
    ```


## 自定义节点（Node）
- https://nodered.org/docs/creating-nodes/first-node
- 初始化包 `npm init` 得到 `package.json`
- 添加 `.js` 和 `.html` 文件
- 在用户目录下安装
    ```bash
    # Linux
    cd ~/.node-red
    npm install ~/dev/node-red-contrib-example-lower-case

    # Windows 
    cd C:\Users\my_name\.node_red
    npm install C:\path\node-red-contrib-example-lower-case
    ```
