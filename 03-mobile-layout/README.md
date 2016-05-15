# 03-Mobile-Layout

## 1.截图

![mobile的felx布局截图](https://raw.githubusercontent.com/MagicCube/homework/jiaxin-wang/03-mobile-layout/shot.png)

## 2.style.less

~~~less
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
    @header-height: 64px;
    @bottom-height: 48px;
    @span-width: 32px;
    height: 100%;
    display: flex;
    flex-direction: column;
    > header
    {
        flex: 0 0 @header-height;
        background: blue;
    }
    > main
    {
        flex: 1 0 auto;
        background: yellow;
    }
    > ul
    {
        flex: 0 0 @bottom-height;
        display: flex;
        margin: 0;
        padding: 0;
        > li
        {
            background: red;
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid black;
            > span
            {
                background: black;
                display: inline-block;
                width: @span-width;
                height: @span-width;
            }
        }
    }

}

~~~
