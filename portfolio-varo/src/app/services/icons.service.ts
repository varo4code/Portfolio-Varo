import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconsService {
  
  private iconMap: Map<string, string> = new Map([
    ['PHP', 'assets/icons/php.svg'],
    ['Laravel', 'assets/icons/laravel.svg'],
    ['Symfony', 'assets/icons/symfony.svg'],
    ['Wordpress', 'assets/icons/wordpress.svg'],
    ['Java', 'assets/icons/java.svg'],
    ['Spring Boot', 'assets/icons/spring-boot.svg'],
    ['MySQL', 'assets/icons/mysql.svg'],
    ['Angular', 'assets/icons/angular.svg'],
    ['NodeJS', 'assets/icons/node-js.svg'],
    ['SASS', 'assets/icons/sass.svg'],
    ['Bootstrap', 'assets/icons/bootstrap.svg'],
    ['jQuery', 'assets/icons/jquery.svg'],
    ['JavaScript', 'assets/icons/javascript.svg'],
    ['CSS3', 'assets/icons/css3.svg' ],
    ['Html5', 'assets/icons/html5.svg'],
    ['Git', 'assets/icons/git.svg'],
    ['Visual Studio Code', 'assets/icons/visual-studio-code.svg'],
    ['Eclipse', 'assets/icons/eclipse.svg'],
    ['Github', 'assets/icons/github.svg'],
    ['Github Copilot', 'assets/icons/github-copilot.svg'],
    ['Swagger', 'assets/icons/swagger.svg'],
    ['ChatGPT', 'assets/icons/chatgpt.svg'],
    ['Jenkins', 'assets/icons/jenkins.svg'],
    ['OpenShift', 'assets/icons/openshift.svg'],
    ['Postman', 'assets/icons/postman.svg'],
    ['Jira', 'assets/icons/jira.svg']
  ]);

  getIcon(key: string) {
    return this.iconMap.get(key);
  }
}
