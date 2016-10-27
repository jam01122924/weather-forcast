/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { TopMenuComponent } from './top-menu.component';

describe('Component: TopMenu', () => {
  let component;
  beforeEach(() => {
    component = new TopMenuComponent();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Weather Focast'`, async(() => {
    expect(component.title).toEqual('Weather Focast');
  }));
  it(`should have 3 menu items`, async(() => {
    expect(component.menus.length).toEqual(3);
  }));
  it(`should have correct menu items`, async(() => {
    expect(component.menus[0].name).toEqual('Weather');
    expect(component.menus[1].name).toEqual('Feature');
    expect(component.menus[2].name).toEqual('Intro');
    expect(component.menus[0].url).toEqual('/weather');
    expect(component.menus[1].url).toEqual('/feature');
    expect(component.menus[2].url).toEqual('/intro');
  }));
});
