import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { KeycloakService } from './services/keycloak-service';

export function authGuard(): CanActivateFn {
  return () => {
    const keycloak = inject(KeycloakService);
    if (keycloak.isLoggedIn) {
      return true;
    }
    keycloak.login();
    return false;
  };
}

export function roleGuard(requiredRole: string): CanActivateFn {
  return () => {
    const keycloak = inject(KeycloakService);
    const router = inject(Router);
    if (!keycloak.isLoggedIn) {
      keycloak.login();
      return false;
    }
    if (keycloak.hasRole(requiredRole)) {
      return true;
    }
    return router.createUrlTree(['/forbidden']);
  };
}
