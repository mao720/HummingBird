---
title: 'Retrofit+OKHttp 忽略 https 证书验证'

date: '2019-11-27'

label: 'Android,Https,Retrofit'

---

开发或者测试过程种有时需要忽略 https 证书验证，通过 OKHttpClient.Builder 对象调用 “sslSocketFactory ”方法 和 “hostnameVerifier ” 方法。

```java
builder.sslSocketFactory(SSLSocketClient.getSSLSocketFactory());
builder.hostnameVerifier(SSLSocketClient.getHostnameVerifier());
```


```java
public class SSLSocketClient
{
    //获取这个SSLSocketFactory  
    public static SSLSocketFactory getSSLSocketFactory()
    {
        try
        {
            SSLContext sslContext = SSLContext.getInstance("SSL");
            sslContext.init(null, getTrustManager(), new SecureRandom());
            return sslContext.getSocketFactory();
        }
        catch (Exception e)
        {
            throw new RuntimeException(e);
        }
    }
 
    //获取TrustManager  
    private static TrustManager[] getTrustManager()
    {
        TrustManager[] trustAllCerts = new TrustManager[]{new X509TrustManager()
        {
            @Override
            public void checkClientTrusted(X509Certificate[] chain, String authType)
            {
            }
 
            @Override
            public void checkServerTrusted(X509Certificate[] chain, String authType)
            {
            }
 
            @Override
            public X509Certificate[] getAcceptedIssuers()
            {
                return new X509Certificate[]{};
            }
        }};
        return trustAllCerts;
    }
 
    //获取HostnameVerifier  
    public static HostnameVerifier getHostnameVerifier()
    {
        HostnameVerifier hostnameVerifier = new HostnameVerifier()
        {
            @Override
            public boolean verify(String s, SSLSession sslSession)
            {
                return true;
            }
        };
        return hostnameVerifier;
    }
}
```
