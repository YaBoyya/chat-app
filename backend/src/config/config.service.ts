import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Contact } from "src/entity/contact.entity";
import { Group } from "src/entity/group.entity";
import { Message } from "src/entity/message.entity";
import { Profile } from "src/entity/profile.entity";
import { User } from "src/entity/user.entity";
import { UserGroup } from "src/entity/usergroup.entity";

require('dotenv').config();

class DatabaseConfigService {
  constructor(private env: {[k: string]: string | undefined}) {}

  private getValue(key: string, throwOnMissing=true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
        throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach(k => this.getValue(k , true));
    return this;
  }

  public getPort() {
    return this.getValue('PORT',  true);
  }

  public isProduction() {
    const mode = this.getValue('MODE', false);
    return mode != 'DEV'
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',

      host: this.getValue('POSTGRES_HOST'),
      port: parseInt(this.getValue('POSTGRES_PORT')),
      username: this.getValue('POSTGRES_USER'),
      password: this.getValue('POSTGRES_PASSWORD'),
      database: this.getValue('POSTGRES_DATABASE'),
      entities: [
        Contact,
        Group,
        Message,
        Profile,
        User,
        UserGroup,
      ],

      migrationsTableName: 'migration',
      migrations: ['src/migrations/*.ts'],
    
      ssl: this.isProduction(),
      synchronize: !this.isProduction(),
    }
  }

}

const databaseConfigService = new DatabaseConfigService(process.env)
  .ensureValues([
    'POSTGRES_HOST',
    'POSTGRES_PORT',
    'POSTGRES_USER',
    'POSTGRES_PASSWORD',
    'POSTGRES_DATABASE'
  ]);

export {databaseConfigService};

