/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('Component: Header', () => {
  let component;
  beforeEach(() => {
    component = new HeaderComponent();
  });

  it('should create an instance', () => {
    // let component = new HeaderComponent();
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Jame\'s Demo Website'`, async(() => {
    expect(component.topTitleLeft).toEqual('Jame\'s Demo Website');
  }));

});
