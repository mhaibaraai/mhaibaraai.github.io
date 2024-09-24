# 超图服务调用踩坑归集

- [iServer 开发指南: API 参考](http://support.supermap.com.cn/DataWarehouse/WebDocHelp/iServer/API/iServer_API_reference.htm)
- [iServer 服务能力介绍](http://support.supermap.com.cn/DataWarehouse/WebDocHelp/iServer/Appendix/function_introduce.htm)

## 1. 地图服务 (MapService)

地图服务名称通常以 **map-xxx** 开头, 如 `http://192.168.110.130:8091/iserver/services/map-DiTu/`

配置通用的服务接口:

![Map 服务接口](mapInterface.png)

目前项目主要使用的接口有: `rest` 和 `wms130`

::: warning 不赞成使用 `wms110`

`SuperMap` 的 `wms110` 版本服务支持该值的目的是向后兼容

:::

### zxyTileImage 瓦片服务

- [iServe zxyTileImage 瓦片服务](http://support.supermap.com.cn/DataWarehouse/WebDocHelp/iServer/mergedProjects/SuperMapiServerRESTAPI/root/maps/map/zxyTileImage/zxyTileImage.htm)

![zxyTileImage 瓦片服务](zxyTileImage.png)

示例服务地址: `http://192.168.110.130:8091/iserver/services/map-DiTu/rest/maps/ditu@ditu/zxyTileImage`

```vue
<script lang="ts" setup>
import { Point } from '@vuesri/core/arcgis'
import { VaSceneView } from '@vuesri/core/components/scene-view'
import { VaSupmapZxyTileImage } from '@vuesri/core/components/supmap-zxy-tile-image'
import { VaTdtBasemap } from '@vuesri/core/components/tdt-basemap'
import { ref } from 'vue'

const url = 'http://192.168.110.130:8091/iserver/services/map-DiTu/rest/maps/ditu@ditu/zxyTileImage'

const formData = ref({
  url,
  transparent: true,
  format: 'png',
})

const viewOptions: __esri.SceneViewProperties = {
  center: new Point({
    x: 12097130.73238203,
    y: 4750187.806440521,
    spatialReference: {
      wkid: 3857,
    },
  }),
  zoom: 16,
}
</script>

<template>
  <VaSceneView :default-options="viewOptions">
    <VaTdtBasemap
      type="vec_w"
      :spatial-reference="{
        wkid: 3857,
      }"
    />

    <VaSupmapZxyTileImage
      :url="formData.url"
      :transparent="formData.transparent"
      :format="formData.format"
      :opacity=".8"
    />
  </VaSceneView>
</template>
```

### wms130

- [iServer WMS 服务](http://support.supermap.com.cn/DataWarehouse/WebDocHelp/iServer/API/WMS/WMS_introduce.htm)

![wms130 服务](wms130.png)

示例服务地址: `http://192.168.110.130:8091/iserver/services/map-DiTu/wms130`

```vue
<script lang="ts" setup>
import { VaSceneView } from '@vuesri/core/components/scene-view'
import { VaTdtBasemap } from '@vuesri/core/components/tdt-basemap'
import { VaWmsLayer } from '@vuesri/core/components/wms-layer'

const url = 'http://192.168.110.130:8091/iserver/services/map-DiTu/wms130'
const layerName = 'ditu@ditu'
</script>

<template>
  <VaSceneView>
    <VaTdtBasemap
      type="vec_w" :anno="false" :spatial-reference="{
        wkid: 3857,
      }"
    />
    <VaWmsLayer
      :url="url" :sublayers="[
        {
          name: layerName,
          visible: true,
          queryable: true,
          popupEnabled: true,
        },
      ]"
    />
  </VaSceneView>
</template>
```

## 数据服务 (DataService)

数据服务名称通常以 **data-xxx** 开头, 如 `http://192.168.110.130:8091/iserver/services/data-cs/`

配置通用的服务接口:

![Data 服务接口](dataInterface.png)

### rest 服务

目前主要用于获取数据服务要素

- 数据集格式: 数据源名称:数据集名称, 如 `erdscs:ordos_nrs_data_ggfwssd`

1. 示例一: 获取所有的数据服务要素结果

   ```js
   const myHeaders = new Headers()
   myHeaders.append('User-Agent', 'Apifox/1.0.0 (https://apifox.com)')
   myHeaders.append('Content-Type', 'application/json')
   myHeaders.append('Accept', '*/*')
   myHeaders.append('Host', '192.168.110.130:8091')
   myHeaders.append('Connection', 'keep-alive')

   const raw = JSON.stringify({
     getFeatureMode: 'SQL',
     queryParameter: '{}',
     datasetNames: '[\'erdscs:ordos_nrs_data_ggfwssd\']'
   })

   const requestOptions = {
     method: 'POST',
     headers: myHeaders,
     body: raw,
     redirect: 'follow'
   }

   fetch('http://192.168.110.130:8091/iserver/services/data-cs/rest/data/featureResults.geojson?returnContent=true', requestOptions)
     .then(response => response.text())
     .then(result => console.log(result))
     .catch(error => console.log('error', error))
   ```

   接口返回类型: FeatureCollection

   ```json
   {
     "type": "FeatureCollection",
     "features": [
       {
         "geometry": {
           "coordinates": [
             109.46437223599997,
             39.783583728999986
           ],
           "type": "Point"
         },
         "id": "1",
         "type": "Feature",
         "properties": {
           "OBJECTID": "1",
           "SSGM": "1779.55",
           "YDMJ": "1779.55",
           "XZQMC": "漫赖村",
           "BZ": " ",
           "YSDM": "2090020521",
           "XZQDM": "150602100200",
           "GHZT": "01",
           "SSLX": "其他基本公共服务设施",
           "BSM": "15060200400000001",
           "SSDM": "2900"
         }
       }
     ]
   }
   ```

### wfs2.0 服务

- [iServer WFS 服务](http://support.supermap.com.cn/DataWarehouse/WebDocHelp/iServer/API/WFS/WFS_introduce.htm)

示例服务地址: `http://192.168.110.130:8091/iserver/services/data-cs/wfs200`

```vue
<script lang="ts" setup>
import { VaSceneView } from '@vuesri/core/components/scene-view'
import { VaTdtBasemap } from '@vuesri/core/components/tdt-basemap'
import { VaWfsLayer } from '@vuesri/core/components/wfs-layer'

const url = 'http://192.168.110.130:8091/iserver/services/data-cs/wfs200'
const layerName = 'ordos_nrs_data_ggfwssd'
</script>

<template>
  <VaSceneView>
    <VaTdtBasemap
      type="vec_w" :anno="false" :spatial-reference="{
        wkid: 3857,
      }"
    />
    <VaWfsLayer :url="url" :name="layerName" geometry-type="polygon" :popup-enabled="true" />
  </VaSceneView>
</template>
```

## 问题归集

### wms 服务通过 sld_body 修改样式不生效

问题描述:

尝试用 SLD_BODY 自定义 wms 服务的样式, GetMap 请求格式如下，图层样式没有渲染

![sld_body error](sldBody.png)

问题原因:

wms 服务目前只支持已定义的图层样式

[iServer GetMap 请求](http://support.supermap.com.cn/DataWarehouse/WebDocHelp/iServer/API/WMS/WMS130/GetMap/GetMap_request.htm)

![sld_body reply](sldBodyReply.png)

### 地图服务获取 geojson 表述格式错误

问题描述:

请求url /iserver/services/map-text/rest/FZJZSSD@cs.geojson 与资源 root 的 url 模板不匹配

![geojson error](geojson.png)

问题原因:

- 数据服务的要素才有 geojson 表述格式,是否支持 geojson 格式，可以看右侧目录栏
- 地图服务和数据服务属于不同的服务类型,需要重新发布服务并勾选 rest 接口

### 报错：400 ，msg：对象已经被释放

![release error](releaseError.png)

问题原因:

可能是数据库数据不同步,先用文件型数据源试下接口请求是否正确

### wfs2.0 服务获取描述文档成功，获取要素的时候报错

问题描述:

![wfs error1](wfsError1.png)

![wfs error2](wfsError2.png)

问题原因:

- iserver 版本为 `iserver 2023 11i` ,不支持 geojson 输出

supermap wfs2.0 执行 GetFeature 操作支持 `outputFormat=json` 输出，但是 xml 表述文档中没有加上`<ows:Value>json</ows:Value>`, 猜测是这个原因导致 arcgis 提示不支持

升级 `iserver` 版本

```text
链接：https://pan.baidu.com/s/1_s4IyXvkx9hFZH3ORwTULA?pwd=u19m
提取码：u19m
```
