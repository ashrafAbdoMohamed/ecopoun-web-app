'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5899f63a78a82344cbeef6411fb5359a",
"version.json": "224a1bd0597ee489173ff13c54bb124f",
"index.html": "ba25c2655deabaa3923c142d0a72585c",
"/": "ba25c2655deabaa3923c142d0a72585c",
"main.dart.js": "1086a4a672cd29f22b1de2ac2f088d5e",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2db0314b2298871dc84fbc9ecec362cc",
"assets/AssetManifest.json": "0652847427bf3c934ef0c503ab65fa9d",
"assets/NOTICES": "3107df383033a28a92827b482e0d3372",
"assets/FontManifest.json": "685a776c9f6579e1e20f27ee2d80229d",
"assets/AssetManifest.bin.json": "225d35f91fe4bda8cdf709b7947a4114",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/localize_and_translate/lang/en.json": "5a3d73ee0b37cf099311314196b51177",
"assets/packages/localize_and_translate/lang/ar-EG.json": "31586ee390dae59dbf19fc43ca4d6ddf",
"assets/packages/localize_and_translate/lang/en-US.json": "5a3d73ee0b37cf099311314196b51177",
"assets/packages/localize_and_translate/lang/ar.json": "31586ee390dae59dbf19fc43ca4d6ddf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2108c8cfa6ac68d549f8c7dfaec2029b",
"assets/fonts/MaterialIcons-Regular.otf": "494560deac9c53d5441a74a95d032008",
"assets/assets/lang/en.json": "6e3ef73a8d061d0f54e289a653621d66",
"assets/assets/lang/ar.json": "43646f5a2f9e17a834345048b030e5c9",
"assets/assets/icons/search_bar_icon.svg": "a683d4ad186342365f551d6aed0a423d",
"assets/assets/icons/like.svg": "4d492f717e0eb65331dff2a0c0ca8703",
"assets/assets/icons/profile_delete.svg": "0464c9ec08dfd5ded2c1078a15b8733d",
"assets/assets/icons/egypt_flag.png": "8035f025f791671a46fc0ac52e19d102",
"assets/assets/icons/logo_splash_svg.svg": "81005f628cf0bf16f2a1a091e1d15421",
"assets/assets/icons/slider2.jpeg": "0002afebb014f3bc19f5a74a7acaf874",
"assets/assets/icons/radio_button_unselected.svg": "c9d19437c0c15266009430b6a90f07a7",
"assets/assets/icons/slider_inactive.svg": "9e924988fb766bc423362add420c7018",
"assets/assets/icons/image_placeholder.svg": "0c2098a737dc0c36b98e3b237de5e897",
"assets/assets/icons/home_subtract.svg": "f39804f941c0af80a784e70e784a19c8",
"assets/assets/icons/back_arrow.svg": "ff5464ab16d4bfe0be47fa385e68e52b",
"assets/assets/icons/app_icon.png": "c0c8e67a8737501016588f31d1e30683",
"assets/assets/icons/kuwait_flag.png": "02c5c15027a2cce68879c060d5c658ac",
"assets/assets/icons/instagram.svg": "2f343aa3c90d27c5662e478fdc3e7871",
"assets/assets/icons/Key.svg": "dfdf5e576fcbd083ea36ad246b628ad9",
"assets/assets/icons/copy_share.svg": "63efbc4af2c3383bf07d78487898b273",
"assets/assets/icons/yajni_logo_text.svg": "26cf5af28ec1605f06a3a328f7178d0c",
"assets/assets/icons/slider3.jpg": "4965d58a874c5740bc0b1fcea81adae3",
"assets/assets/icons/favourite_emoty.svg": "964522b13fc85a219bcaf3a3fcef83e6",
"assets/assets/icons/slide_1.jpeg": "6a727f342c4e3a860afec092f9a609cc",
"assets/assets/icons/logo_black.svg": "59902772acf4677e04f6ea031be51621",
"assets/assets/icons/external_link.svg": "13d8adb7e14dae6304925765ffdea81f",
"assets/assets/icons/new_group_bk.svg": "efb02ede2a980b731b38b42f908fc51e",
"assets/assets/icons/chevron_right.svg": "d540b44bb883239e5cf1d9e22e546873",
"assets/assets/icons/google_button.svg": "02821c9f721c1c7fa5fcf618526262dd",
"assets/assets/icons/logo_splash.png": "8347f379713427384f316d8c3e39315c",
"assets/assets/icons/nav_bar/profile_unselected.svg": "557885d2f4e13b1ccaa931294237f171",
"assets/assets/icons/nav_bar/execlusive_selected.svg": "c1ec5ab951adaf1dae28b07eabea3019",
"assets/assets/icons/nav_bar/category_selected.svg": "6427453e5cd151f158fd25f82fca77a8",
"assets/assets/icons/nav_bar/favourites_unselected.svg": "9f64019f022cbf55a8b3e857ed102364",
"assets/assets/icons/nav_bar/exclusive_unselected.svg": "555f2bcc2a059a1e7c1bd1b15c957391",
"assets/assets/icons/nav_bar/favourites_selected.svg": "7b6da48a7e45b686e58dc46b8e8f69dc",
"assets/assets/icons/nav_bar/home_selected.svg": "098abebd7b64b9476304c69b375815a0",
"assets/assets/icons/nav_bar/category_unselected.svg": "a67fe163f3653a15dc0778418c902933",
"assets/assets/icons/nav_bar/home_unselected.svg": "b323e6a07666024b422e40f682b15a57",
"assets/assets/icons/nav_bar/profile_selected.svg": "4a27a31f65cf014e97ca678f44942da7",
"assets/assets/icons/info.svg": "e7f8a6a50897a5e36ec992b28094d3fc",
"assets/assets/icons/add.svg": "2ab42b4fabc329c4c096aaac3cc26379",
"assets/assets/icons/close.svg": "e703cb21882c26f059e044f0329c5c29",
"assets/assets/icons/check_circle.svg": "40dae9cf8f53ee725da1da564df98c9b",
"assets/assets/icons/merchants/max_logo.png": "3a62d248759c566e22cadd6083b38d1b",
"assets/assets/icons/merchants/travel_category.svg": "d04ecae6c37d802e42d17dafcca4d6bb",
"assets/assets/icons/merchants/noon_logo.png": "4b0688ab4d15ea99507f8d4cbd8ad99b",
"assets/assets/icons/merchants/sara_logo.png": "ba648d3d9e7c5e1349747e086d0f1426",
"assets/assets/icons/merchants/namshi_logo.png": "4bd2c2a31318266dd220a774ebb2e156",
"assets/assets/icons/merchants/home_appliances_category.svg": "1387da577090ed4a213d3a903bc4c6ec",
"assets/assets/icons/merchants/amazon_logo.png": "1bb8a9c9550d13c98936d4bdc06010d2",
"assets/assets/icons/merchants/sushi_logo.png": "c11480f816096a2a007c834fe7627897",
"assets/assets/icons/merchants/waffarha_logo.png": "efd2ec54758522ac9e3e181aeaf78456",
"assets/assets/icons/merchants/muji_logo.png": "a06af0b03a5de7bd409be61c8a6379d4",
"assets/assets/icons/merchants/namshi_cover.jpeg": "3a842c868a2e5ceb2dfa034794122cd2",
"assets/assets/icons/merchants/american_eagle_cover.png": "5f27a37ce6fccce944271f99179f19da",
"assets/assets/icons/merchants/american_eagle_logo.png": "a1865515480123425e5348e5d5aa1a6d",
"assets/assets/icons/merchants/max_cover.png": "5f27a37ce6fccce944271f99179f19da",
"assets/assets/icons/yajny_logo_text_image.png": "3d37e848c6cc92ce42ec550fcf0c4fc4",
"assets/assets/icons/snapchat.svg": "a2638d82950dd141bc20c5f23399fe5a",
"assets/assets/icons/profile_contact.svg": "fe4097bbc724da0739c025a1dfbd72e6",
"assets/assets/icons/shop_now.svg": "2e38fb08cbdb82cd88ea10965d250419",
"assets/assets/icons/yajni_logo_splash.svg": "690886e022a7c8b92a36a59e6937446f",
"assets/assets/icons/saudi_flag.png": "5eabb8dcf0458eaea8a270642f8c2932",
"assets/assets/icons/slide_3.jpeg": "6a727f342c4e3a860afec092f9a609cc",
"assets/assets/icons/coupon.svg": "1bdb77baa09ca63c12dffd0c13aa3108",
"assets/assets/icons/app_start_decoration.svg": "8a89e0b4e3bed51c19a7deb255d912d8",
"assets/assets/icons/profile_notification.svg": "0bfa0d7294b68a5917ede41d50d1a188",
"assets/assets/icons/facebook.svg": "e8c29bac59cf7e6d065de4a1deb4023b",
"assets/assets/icons/condition.svg": "7de411b21c698e8d19f132655aa9899b",
"assets/assets/icons/globe.png": "c41c0ad0eccac74848640e9dd856a8a3",
"assets/assets/icons/email_profile.svg.svg": "c00acfb26dc02b13163de6a2068c672f",
"assets/assets/icons/ecopone_logo_animation.json": "a3349186a094eaa400bf3e199ca3cb40",
"assets/assets/icons/slide_2.jpeg": "6a727f342c4e3a860afec092f9a609cc",
"assets/assets/icons/radio_button_selected.svg": "767b207e6ec86ccc803b490e0f25b7f9",
"assets/assets/icons/e_coupon_logo_main.svg": "30861a7882ffd3eb3d682fbed4242ea5",
"assets/assets/icons/yajni_logo_with_border.svg": "72a91451da53095990dedd18a3a9922c",
"assets/assets/icons/e_coupon_logo_dark.svg": "6eb23af54081adda3a38dc4671c73d98",
"assets/assets/icons/logo_without_text.png": "dd3c033e5c7de23e2b891314d63fc9c8",
"assets/assets/icons/exit.svg": "2b39b1b83c19bba737ff5d81631d68f9",
"assets/assets/icons/logo_text_dark.png": "b0fc77bc3af15ddd91d11dfa7cda2ebf",
"assets/assets/icons/facebook_button.svg": "b879c34b447119c2b7a6257dff4890a3",
"assets/assets/icons/slider_active.svg": "3739a5446310c6ca4d067ceae933ca03",
"assets/assets/icons/feedback_profile.svg": "f4abf7237c6019d9a746d5f1ecf53a66",
"assets/assets/icons/password_eye_icon.svg": "821c9a498d118c34fa23d90d26d09a3f",
"assets/assets/icons/twitter.svg": "8836f7c5d5287087ebf4c3ceb8430d80",
"assets/assets/icons/uae_flag.png": "d89d3b37282d96580a341a983b75fd2c",
"assets/assets/icons/calendar.svg": "f56525a4dd9031c55814976b3057f865",
"assets/assets/icons/dialog_close.svg": "9510af813d7f771799ec0fb426dd2cb9",
"assets/assets/icons/slider1.jpeg": "5b78d3f63d9d21b20160a6b58c9f4539",
"assets/assets/icons/profile_rate.svg": "d0d57acfbf8832644f193a50290b56ec",
"assets/assets/icons/profile_logout.svg": "08d1302ce64ef0fe68584e5c0883b66d",
"assets/assets/icons/password.svg": "8ef2e38aa785f1c0d327bbf1f07a9b58",
"assets/assets/icons/home_search.svg": "24a44576e3149f8abb8c55dc38031d84",
"assets/assets/icons/profile_faq.svg": "b589acf10a91462e91039c0c1b12c887",
"assets/assets/icons/yajny_logo_text_image.svg": "fd945bc57eb68c651bef905c3a1dd19b",
"assets/assets/icons/profile_sign_in.svg": "8e4bfe4f525f9981f3fc936625e51ea5",
"assets/assets/icons/unlike.svg": "c6c69da4e3edc33099308bebf51704f1",
"assets/assets/icons/heart.svg": "de3e64ac225a61370901a7ad2dcaec0e",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/janna_lt/Janna-LT-Regular.ttf": "378ee291669883b443cc8036d148b4fe",
"assets/assets/fonts/janna_lt/Janna-LT-Bold.ttf": "0655ac2529565b93080fef53a0e85ffe",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
