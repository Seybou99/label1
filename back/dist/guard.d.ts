import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { FirebaseService } from './firebase/firebase.service';
export declare class AuthGuard implements CanActivate {
    private reflector;
    private firebaseService;
    private readonly logger;
    constructor(reflector: Reflector, firebaseService: FirebaseService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private verifyFirebaseToken;
    private setRequestAuth;
    private extractTokenFromHeader;
    private getFriendlyError;
}
export declare const Auth: (...dataOrPipes: (string | import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>>)[]) => ParameterDecorator;
