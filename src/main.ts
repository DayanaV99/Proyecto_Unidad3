import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { isDevMode } from '@angular/core';
import { provideServiceWorker } from '@angular/service-worker';


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/ngsw-worker.js').then((registration) => {
      console.log('Service Worker registrado con éxito:', registration);
    }).catch((error) => {
      console.error('Error en el registro del Service Worker:', error);
    });
  });
}


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          })
  ]
}).catch(err => console.error(err));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const swUrl = '/ngsw-worker.js'; // La URL del Service Worker generado por Angular
    navigator.serviceWorker.register(swUrl).then((registration) => {
      console.log('Service Worker registrado con el alcance:', registration.scope);

      // Escuchar los eventos del Service Worker
      registration.addEventListener('updatefound', () => {
        const installingWorker = registration.installing;
        if (installingWorker) {
          installingWorker.addEventListener('statechange', () => {
            switch (installingWorker.state) {
              case 'installed':
                console.log('Service Worker instalado');
                break;
              case 'activating':
                console.log('Service Worker activando');
                break;
              case 'activated':
                console.log('Service Worker activado');
                break;
              case 'redundant':
                console.log('Service Worker redundante');
                break;
              default:
                console.log('Estado del Service Worker:', installingWorker.state);
            }
          });
        }
      });
    }).catch((error) => {
      console.error('Error al registrar el Service Worker:', error);
    });
  });
}