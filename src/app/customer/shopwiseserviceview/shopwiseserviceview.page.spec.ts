import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopwiseserviceviewPage } from './shopwiseserviceview.page';

describe('ShopwiseserviceviewPage', () => {
  let component: ShopwiseserviceviewPage;
  let fixture: ComponentFixture<ShopwiseserviceviewPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopwiseserviceviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopwiseserviceviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
