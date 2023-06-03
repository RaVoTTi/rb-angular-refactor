

// MODULE
export * from './lib/auth-base.module';


// NGRX
// export * from './lib/state/auth.state'

// INTERFACES
export * from './lib/interfaces/IAuth'
export * from './lib/interfaces/IRegister'


// GUARDS

// export * from './lib/guards/auth-admin.guard';
export * from './lib/guards/is-logged-in.guard';
export * from './lib/guards/is-logged-out.guard';

// SERVICES
export * from './lib/services/jwt.interceptor';
export * from './lib/services/auth-base.service';
export * from './lib/services/local-storage.service';