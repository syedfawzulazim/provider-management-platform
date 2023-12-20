import {MigrationInterface, QueryRunner} from "typeorm";

export class addOfferTableAndCreateRelation1702857042473 implements MigrationInterface {
    name = 'addOfferTableAndCreateRelation1702857042473'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`offer\` (\`id\` int NOT NULL AUTO_INCREMENT, \`agreementId\` int NOT NULL, \`skills\` text NOT NULL, \`experienceLevel\` varchar(255) NOT NULL, \`salary\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`providerId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`offer\` ADD CONSTRAINT \`FK_9702bff45c3e2bb6965d16023ac\` FOREIGN KEY (\`providerId\`) REFERENCES \`provider\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`offer\` DROP FOREIGN KEY \`FK_9702bff45c3e2bb6965d16023ac\``);
        await queryRunner.query(`DROP TABLE \`offer\``);
    }

}
