import { GetActorsHandler } from "./app/actor/get-actors.handler";
import { GetAddressesHandler } from "./app/address/get-addresses.handler";
import { GetCategoryHandler } from "./app/category/get-category.handler";
import { GetCityHandler } from "./app/city/get-city.handler";
import { GetCountryHandler } from "./app/country/get-country.handler";
import { GetCustomerHandler } from "./app/customer/get-customer.handler";
import { GetFilmActorHandler } from "./app/film-actor/get-film-actor.handler";
import { GetFilmCategoryHandler } from "./app/film-category/get-film-category.handler";
import { GetFilmHandler } from "./app/film/get-film.handler";
import { GetInventoryHandler } from "./app/inventory/get-inventory.handler";
import { GetLanguageHandler } from "./app/language/get-language.handler";
import { GetPaymentHandler } from "./app/payment/get-payment.handler";
import { GetRentalHandler } from "./app/rental/get-rental.handler";
import { GetStaffHandler } from "./app/staff/get-staff.handler";
import { GetStoreHandler } from "./app/store/get-store.handler";

import { InMemoryCache } from "./lib/cache/in-memory-cache";
import { redisClient } from "./lib/cache/redis-cache";
import { RequestHandlersCache } from "./lib/request/request-handlers-cache";
import { HTTP_METHODS, IRoute } from "./lib/types";


const inMemoryCache = new InMemoryCache();
const redisCache = redisClient;
const requestHandlersCache = new RequestHandlersCache(redisCache, inMemoryCache);


export const router: IRoute[] = [
    { method: HTTP_METHODS.GET, path: '/actor', requestHandler: new GetActorsHandler(requestHandlersCache) },
    { method: HTTP_METHODS.GET, path: '/address', requestHandler: new GetAddressesHandler(requestHandlersCache) },
    { method: HTTP_METHODS.GET, path: '/category', requestHandler: new GetCategoryHandler(requestHandlersCache) },
    { method: HTTP_METHODS.GET, path: '/city', requestHandler: new GetCityHandler(requestHandlersCache) },
    { method: HTTP_METHODS.GET, path: '/country', requestHandler: new GetCountryHandler(requestHandlersCache) },
    { method: HTTP_METHODS.GET, path: '/customer', requestHandler: new GetCustomerHandler(requestHandlersCache) },
    { method: HTTP_METHODS.GET, path: '/film-actor', requestHandler: new GetFilmActorHandler(requestHandlersCache) },
    { method: HTTP_METHODS.GET, path: '/film-category', requestHandler: new GetFilmCategoryHandler(requestHandlersCache) },
    { method: HTTP_METHODS.GET, path: '/inventory', requestHandler: new GetInventoryHandler(requestHandlersCache) },
    { method: HTTP_METHODS.GET, path: '/film', requestHandler: new GetFilmHandler(requestHandlersCache) },
    { method: HTTP_METHODS.GET, path: '/language', requestHandler: new GetLanguageHandler(requestHandlersCache) },
    { method: HTTP_METHODS.GET, path: '/payment', requestHandler: new GetPaymentHandler(requestHandlersCache) },
    { method: HTTP_METHODS.GET, path: '/rental', requestHandler: new GetRentalHandler(requestHandlersCache) },
    { method: HTTP_METHODS.GET, path: '/staff', requestHandler: new GetStaffHandler(requestHandlersCache) },
    { method: HTTP_METHODS.GET, path: '/store', requestHandler: new GetStoreHandler(requestHandlersCache) },
  ];