console.log('ouverture');
if ( 'serviceWorker' in navigator ) {  
  window.addEventListener ( 'load' , () => {  
console.log('app java ok');  
    navigator.serviceWorker.register ( 'sw.js', { scope: '/' }); 
	console.log('service worker en route');
  });
}