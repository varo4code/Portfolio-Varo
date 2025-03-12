import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IconsService {
  private base = 'assets/icons/';

  private iconMap: Map<string, string> = new Map([
    ['PHP', this.base + 'php.svg'],
    ['Laravel', this.base + 'laravel.svg'],
    ['Symfony', this.base + 'symfony.svg'],
    ['Wordpress', this.base + 'wordpress.svg'],
    ['Java', this.base + 'java.svg'],
    ['Spring Boot', this.base + 'spring-boot.svg'],
    ['MySQL', this.base + 'mysql.svg'],
    ['Angular', this.base + 'angular.svg'],
    ['NodeJS', this.base + 'node-js.svg'],
    ['Vue', this.base + 'vue.svg'],
    ['Nuxt', this.base + 'nuxt.svg'],
    ['SASS', this.base + 'sass.svg'],
    ['Bootstrap', this.base + 'bootstrap.svg'],
    ['jQuery', this.base + 'jquery.svg'],
    ['JavaScript', this.base + 'javascript.svg'],
    ['TypeScript', this.base + 'typescript.svg'],
    ['CSS3', this.base + 'css3.svg'],
    ['Html5', this.base + 'html5.svg'],
    ['Git', this.base + 'git.svg'],
    ['Visual Studio Code', this.base + 'visual-studio-code.svg'],
    ['Eclipse', this.base + 'eclipse.svg'],
    ['Github', this.base + 'github.svg'],
    ['Github Copilot', this.base + 'github-copilot.svg'],
    ['Swagger', this.base + 'swagger.svg'],
    ['ChatGPT', this.base + 'chatgpt.svg'],
    ['Jenkins', this.base + 'jenkins.svg'],
    ['OpenShift', this.base + 'openshift.svg'],
    ['Postman', this.base + 'postman.svg'],
    ['Jira', this.base + 'jira.svg'],
    ['Maven', this.base + 'maven.svg'],
  ]);

  getIcon(key: string) {
    return this.iconMap.get(key);
  }
}
