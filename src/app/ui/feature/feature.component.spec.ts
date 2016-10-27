/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FeatureComponent } from './feature.component';

describe('Component: Feature', () => {
  let component;
  beforeEach(() => {
    component = new FeatureComponent();
  });
  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
  it(`should have 9 feature items`, async(() => {
    expect(component.features.length).toEqual(9);
  }));
  it(`should have correct feature items`, async(() => {
    expect(component.features[0].title).toEqual('Framework');
    expect(component.features[1].title).toEqual('Code Language');
    expect(component.features[2].title).toEqual('Responsive Design');
    expect(component.features[3].title).toEqual('Find User Location');
    expect(component.features[4].title).toEqual('Lazy Load');
    expect(component.features[5].title).toEqual('Smart Background Picture');
    expect(component.features[6].title).toEqual('Metric & Imperial Switch');
    expect(component.features[7].title).toEqual('CSS');
    expect(component.features[8].title).toEqual('Things would have been done');
  }));
});
