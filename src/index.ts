// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license.
import {Utilities as ExcelUtilities} from './excel/utilities';

export * from './errors/dialog'
export * from './errors/auth'
export * from './helpers/dialog'
export * from './helpers/utilities';
export * from './helpers/dictionary';
export * from './helpers/storage';
export * from './helpers/dialog';
export * from './authentication/token.manager';
export * from './authentication/endpoint.manager';
export * from './authentication/authenticator';

export const Excel = {
    Utilities: ExcelUtilities
};
