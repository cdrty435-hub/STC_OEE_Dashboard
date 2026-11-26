// 통역 회의 앱 설치용 (내용은 항상 인터넷에서 새로 받음)
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {});
