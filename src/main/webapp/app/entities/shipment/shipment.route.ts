import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable } from 'rxjs';
import { Shipment } from 'app/shared/model/shipment.model';
import { ShipmentService } from './shipment.service';
import { ShipmentComponent } from './shipment.component';
import { ShipmentDetailComponent } from './shipment-detail.component';
import { ShipmentUpdateComponent } from './shipment-update.component';
import { ShipmentDeletePopupComponent } from './shipment-delete-dialog.component';
import { IShipment } from 'app/shared/model/shipment.model';

@Injectable({ providedIn: 'root' })
export class ShipmentResolve implements Resolve<IShipment> {
    constructor(private service: ShipmentService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).map((shipment: HttpResponse<Shipment>) => shipment.body);
        }
        return Observable.of(new Shipment());
    }
}

export const shipmentRoute: Routes = [
    {
        path: 'shipment',
        component: ShipmentComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'storeApp.shipment.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'shipment/:id/view',
        component: ShipmentDetailComponent,
        resolve: {
            shipment: ShipmentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'storeApp.shipment.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'shipment/new',
        component: ShipmentUpdateComponent,
        resolve: {
            shipment: ShipmentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'storeApp.shipment.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'shipment/:id/edit',
        component: ShipmentUpdateComponent,
        resolve: {
            shipment: ShipmentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'storeApp.shipment.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const shipmentPopupRoute: Routes = [
    {
        path: 'shipment/:id/delete',
        component: ShipmentDeletePopupComponent,
        resolve: {
            shipment: ShipmentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'storeApp.shipment.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
