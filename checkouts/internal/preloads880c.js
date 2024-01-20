
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.c03c8489090cb1b60f52.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5.baseline.en.b14f387ff7ada5d4a6d8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/284.baseline.en.bc73f826ccd6f70e8573.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/598.baseline.en.5a50b685587bf18e0831.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.f55662a81946b78b942b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/731.baseline.en.ffc1b33abd05b4658105.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/958.baseline.en.0f3c596724727b7fcb57.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/608.baseline.en.01149e16e975fd738d05.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/844.baseline.en.4be6f8f745eacab38323.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.en.6cc376767a78596728b5.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/5.baseline.en.ee132514bdf13d2f2003.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.bd7e1a04a0d2456be516.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/958.baseline.en.adb56ed22ef5fe7671a2.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/74.baseline.en.46e31138b0004161b599.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  