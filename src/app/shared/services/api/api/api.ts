export * from './brand-controller.service';
import { BrandControllerService } from './brand-controller.service';
export * from './brand-controller.serviceInterface';
export * from './car-controller.service';
import { CarControllerService } from './car-controller.service';
export * from './car-controller.serviceInterface';
export * from './fuel-controller.service';
import { FuelControllerService } from './fuel-controller.service';
export * from './fuel-controller.serviceInterface';
export * from './model-controller.service';
import { ModelControllerService } from './model-controller.service';
export * from './model-controller.serviceInterface';
export * from './transmission-controller.service';
import { TransmissionControllerService } from './transmission-controller.service';
export * from './transmission-controller.serviceInterface';
export const APIS = [BrandControllerService, CarControllerService, FuelControllerService, ModelControllerService, TransmissionControllerService];
