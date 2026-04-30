import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root',
})
export class KeycloakService {
    private keycloak = new Keycloak({
    url: 'http://127.0.0.1:8080',
    realm: 'master',
    clientId: 'angular-frontend',
  });

  get username(): string {
    return this.keycloak.tokenParsed?.['preferred_username'] ?? '';
  }

  get roles(): string[] {
    return this.keycloak.tokenParsed?.['realm_access']?.['roles'] ?? [];
  }

  get isLoggedIn(): boolean {
    return !!this.keycloak.authenticated;
  }

  hasRole(role: string): boolean {
    return this.roles.includes(role);
  }

  async init(): Promise<boolean> {
    const authenticated = await this.keycloak.init({
      onLoad: 'check-sso',
      checkLoginIframe: false,
    });
    return authenticated;
  }

  login(): Promise<void> {
    return this.keycloak.login();
  }

  logout(): Promise<void> {
    return this.keycloak.logout({ redirectUri: window.location.origin });
  }
}
