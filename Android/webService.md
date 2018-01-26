
## WebService 

### 访问的必要条件

```java
String nameSpace = "" ;
String MethodName = "" ;
String WSDL_URL ="" ;
String soapAction = nameSpace+methodName ;
```

1,指定命名空间和调用的方法名
```java
SoapObject rpc = new SoapObject(nameSpace , methodsName);
```

2.设置参数

```java
rpc.addPropery("wordKey","test");
```
     
3.指定soap协议版本号

```java
SoapSerializationEnvelope envelope = new SoapSerializationEnvelope(SoapEnvelope.VER11);
```

4.设置输出

```java
envelope.bodyOut = rpc ;
//设置允许.net
envelope.dotNet= true ;
envelope.setOutputSoapObject(rpc);
//创建HttpTransportSE 对象
HttpTransportSE se = new HttpTransportSE(WSDL_URL); 
//调用call方法
se.call(soapAction ,envelope) ;
//获得访问结果
SoapObject obj = envelope.bodyIn ;
```

解析数据
