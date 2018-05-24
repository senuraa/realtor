import { Component } from '@angular/core';

import { MyProfilePage } from '../my-profile/my-profile';
import { FavoritesPage } from '../favorites/favorites';
import { SearchPage } from '../search/search';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MyProfilePage;
  tab3Root = FavoritesPage;
  tab4Root = SearchPage;

  constructor() {

  }
}
