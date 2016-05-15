# 04-layout

## 1.pos-abs

### 1.1 截图

![pos-abs的截图](https://raw.githubusercontent.com/MagicCube/homework/jiaxin-wang/04-layout/pos-abs.png)

### 1.2 pos-abs-style.less

~~~
*
{
    box-sizing: border-box;
}

html, body
{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

body
{
    font-size: 14px;
}

.app
{
    @left-aside-width: 300px;
    @right-aside-width: 400px;
    @header-height: 50px;
    @footer-height: 50px;
    @middle-aside-width:300px;
    height: 100%;
    > *
    {
        position: absolute;
        top: 0;
        bottom: 0;
    }
    > aside
    {
        &.left
        {
            left: 0;
            width: @left-aside-width;
            height: 100%;
            background: blue;
        }
        &.right
        {
            right: 0;
            width: @right-aside-width;
            height: 100%;
            background: blue;
        }
    }
    > .container
    {
        left: @left-aside-width;
        right: @right-aside-width;
        height: 100%;
        > *
        {
            position: absolute;
            left: 0;
            right: 0;
        }
        > header
        {
            top: 0;
            height: @header-height;
            background: yellow;
        }
        > .container2
        {
            top: @header-height;
            bottom: @footer-height;
            > *
            {
                position: absolute;
                top: 0;
                bottom: 0;
            }
            > aside
            {
                &.middle
                {
                    left: 0;
                    width: @middle-aside-width;
                    background: gray;
                }
            }
            > main
            {
                left: @middle-aside-width;
                right: 0;
                background: orange;
            }
        }
        > footer
        {
            bottom: 0;
            height: @footer-height;
            background: red;
        }
    }

}

~~~

## 2.flex

### 2.1 截图

![flex的截图](https://raw.githubusercontent.com/MagicCube/homework/jiaxin-wang/04-layout/flex.png)

### 2.2 flex-style.less
~~~
*
{
    box-sizing: border-box;
}

html, body
{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

body
{
    font-size: 14px;
}

.app
{
    @left-aside-width: 300px;
    @right-aside-width: 400px;
    @header-height: 50px;
    @footer-height: 50px;
    @middle-aside-width:300px;
    height: 100%;
    display: flex;
    > aside
    {
        &.left
        {
            flex: 0 0 @left-aside-width;
            background: yellow;
        }
        &.right
        {
            flex: 0 0 @right-aside-width;
            background: yellow;
        }
    }
    > .container
    {
        height: 100%;
        flex: 1 0 auto;
        display: flex;
        flex-direction: column;
        > header
        {
            flex: 0 0 @header-height;
            background: blue;
        }
        > .container2
        {
            flex: 1 0 auto;
            display: flex;
            > aside
            {
                &.middle
                {
                    flex: 0 0 @middle-aside-width;
                    background: orange;
                }
            }
            > main
            {
                flex: 1 0 auto;
                background: gray;
            }
        }
        > footer
        {
            flex: 0 0 @footer-height;
            background: black;
        }
    }
}

~~~
