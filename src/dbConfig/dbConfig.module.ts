import { Module } from '@nestjs/common';

import { dbConfigProviders } from './dbConfig.providers';

@Module({
    components: [...dbConfigProviders],
    exports: [...dbConfigProviders]
})
export class dbConfigModule { }