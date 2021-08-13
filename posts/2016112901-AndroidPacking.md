---
title: 'Android 多渠道打包'

date: '2016-11-29'

label: 'Android,Gradle'

---

概念：
>* 发布到不同渠道的app，使用不同的标记来标识，以便于统计数据

原理：
>1. 为apk打标记(渠道的标识)
>2. 运行apk的时候取出标记
>3. 上传标记给服务器统计

####具体实现（以友盟为例）
1. 使用Gradle进行多渠道打包
 * 在配置文件配置meta-data标签
```xml
<meta-data
            android:name="UMENG_CHANNEL"
            android:value="${UMENG_CHANNEL_VALUE}"/>
```

 * 在app目录下build.gradle配置

 ```groovy
    signingConfigs {
        config {
            keyAlias 'key别名'
            keyPassword 'key密码'
            storeFile file('../app/sobig.jks')
            storePassword 'jks密码'
        }
    }
```
 ```groovy
	  defaultConfig {
        applicationId "com.saipeisi.sobig"
        minSdkVersion 14
        targetSdkVersion 21
        versionCode 2010000
        versionName "1.0.0"
	
        signingConfig signingConfigs.config

        // dex突破65535的限制
        multiDexEnabled true
        // 默认是umeng的渠道
        manifestPlaceholders = [UMENG_CHANNEL_VALUE: "umeng"]
    	}
```
 ```groovy
 	productFlavors {
        wandoujia {}
        _360 {}
        baidu {}
        xiaomi {}
        tencent {}
        sougou {}
        oppo {}
        mumayi {}
        meizu {}
        Lenovo {}
        kuchuan {}
        jinli {}
        jifeng {}
        huawei {}
        sobig {}
    }
    productFlavors.all { flavor ->
        flavor.manifestPlaceholders = [UMENG_CHANNEL_VALUE: name]
    }
```
 ```groovy
 	buildTypes {
        debug {
            signingConfig signingConfigs.config
        }
        release {
            signingConfig signingConfigs.config
        }
    }
```
2. 使用开源项目MultiChannelBuildTool快速打包
> 注意：原理是将一个空文件插入到已签名的包的MATE-INFO目录下，在app初始化的时候使用ChannelUtil.java获得对应的渠道标识，发送到自己服务器或者通过友盟api初始化进行数据统计
https://github.com/GavinCT/AndroidMultiChannelBuildTool
3. 使用开源项目packer-ng-plugin快速打包
> https://github.com/mcxiaoke/packer-ng-plugin
