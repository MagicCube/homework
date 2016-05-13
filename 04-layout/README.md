# Homework-04-Layout

## 1、截图

### flex

![04-layout-flex](https://raw.githubusercontent.com/MagicCube/homework/shuo-chen/04-layout/screenshot-flex.PNG)

### position-abs

![04-layout-pos-abs](https://raw.githubusercontent.com/MagicCube/homework/shuo-chen/04-layout/screenshot-pos-abs.PNG)



## 2、Less代码

### style-flex.less

~~~less
*{
    box-sizing: border-box;;
}

html, body{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

body{
    font-size: 14px;
}

@app-left-width: 300px;
@app-right-width: 400px;
@header-height: 50px;
@footer-height: 50px;
@nav-width: 300px;

.app{
    height: 100%;
    display: flex;

    > .app-left{
        background-color: grey;
        flex: 0 0 @app-left-width;
    }

    > .app-middle{
        flex: 1 0 auto;
        display: flex;
        flex-direction: column;

        > header{
            background-color: #0767b8;
            flex: 0 0 @header-height;
        }

        > .container{
            background-color: orange;
            flex: 1 0 auto;
            display: flex;

            > nav{
                background-color: red;
                flex:0 0 @nav-width;
            }

            > main{
                background-color: yellow;
                flex: 1 0 auto;
            }
        }

        > footer{
            background-color: green;
            flex: 0 0 @footer-height;
        }
    }

    > .app-right{
        background-color: pink;
        flex: 0 0 @app-right-width;
    }
}

~~~



### style-pos-abs.less

~~~less
*{
    box-sizing: border-box;
}

html, body{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

body{
    font-size: 14px;
}

@app-left-width: 300px;
@app-right-width: 400px;
@header-height: 50px;
@footer-height: 50px;
@nav-width: 300px;

.app{
    height:100%;

    > *{
        position: absolute;
        top: 0;
        bottom: 0;
    }

    > .app-left{
        left: 0;
        width: @app-left-width;
        background-color: blue;
    }

    > .app-middle{
        left:@app-left-width;
        right:@app-right-width;

        > *{
            position: absolute;
            left: 0;
            right: 0;
        }

        > header{
            top: 0;
            height: @header-height;
            background-color: red;
        }

        > .container{
            top:@header-height;
            bottom: @footer-height;

            > *{
                position: absolute;
                top:0;
                bottom: 0;
            }

            > nav{
                left: 0;
                width: @nav-width;
                background-color: purple;
            }

            > main{
                left:@nav-width;
                right:0;
                background-color: yellow;
            }
        }

        > footer{
            bottom: 0;
            height: @footer-height;
            background-color: pink;
        }

    }

    > .app-right{
        right:0;
        width: @app-right-width;
        background-color: green;
    }
}

~~~





