# textEllipsis
平时做项目的时候总是会遇到要求限制显示的字数。一般都是交由后端来切割字数，但有时候总是被后端丢锅，所以也就写个小插件来处理字数限制显示 。

该插件是基于jQuery框架，所以在使用之前，需要先导入jQuery. 
使用方式比较简单，只需要实例化就可以

例如：
  
  $("p").textEllipsis();
  
  默认参数:
  
    {
    
        "max":20 //限制的字符大小       
    }
    
或者是用  data-role='ellipsis' data-max='30'到某元素上 
