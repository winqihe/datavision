# datavision
针对企业进行的数据可视化展示

食用方法：

首先创建相应的数据库，并创建表，表的数据文件放在了后端代码中。

[![cvAlMn.png](https://z3.ax1x.com/2021/04/24/cvAlMn.png)](https://imgtu.com/i/cvAlMn)
之后修改后端的application.properties.

记得修改数据库的名字以及密码和你的要对应。

![image-20210419230202575](C:\Users\winqihe\AppData\Roaming\Typora\typora-user-images\image-20210419230202575.png)

```xml
server.port=8081
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.username=root
spring.datasource.password=root
spring.datasource.url=jdbc:mysql://localhost:3306/hotel?&useSSL=false&serverTimezone=UTC
```

将后端项目导入idea，启动后端项目。

最后直接打开index.html在浏览器中显示即可。
