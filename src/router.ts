import { GetActorsHandler } from "./handlers/get-actors.handler";
import { GetAddressesHandler } from "./handlers/get-addresses.handler";
import { GetCategoryHandler } from "./handlers/get-category.handler";
import { GetCityHandler } from "./handlers/get-city.handler";
import { GetCountryHandler } from "./handlers/get-country.handler";
import { GetCustomerHandler } from "./handlers/get-customer.handler";
import { GetFilmActorHandler } from "./handlers/get-film-actor.handler";
import { GetFilmCategoryHandler } from "./handlers/get-film-category.handler";
import { GetFilmHandler } from "./handlers/get-film.handler";
import { GetInventoryHandler } from "./handlers/get-inventory.handler";
import { GetLanguageHandler } from "./handlers/get-language.handler";
import { GetPaymentHandler } from "./handlers/get-payment.handler";
import { GetRentalHandler } from "./handlers/get-rental.handler";
import { GetStaffHandler } from "./handlers/get-staff.handler";
import { GetStoreHandler } from "./handlers/get-store.handler";
import { TestRequestHandler } from "./handlers/test-request.handler";
import { InMemoryCache } from "./lib/cache/in-memory-cache";
import { redisClient } from "./lib/cache/redis-cache";
import { RequestHandlersCache } from "./lib/request/request-handlers-cache";
import { HTTP_METHODS, IRoute } from "./lib/types";


const inMemoryCache = new InMemoryCache();
const redisCache = redisClient;
//@ts-ignore
const requestHandlersCache = new RequestHandlersCache(redisCache, inMemoryCache);


export const router: IRoute[] = [
    { method: HTTP_METHODS.GET, path: '/test', requestHandler: new TestRequestHandler(requestHandlersCache)},
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