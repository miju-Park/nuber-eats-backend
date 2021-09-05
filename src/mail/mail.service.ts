import { Inject, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { CONFIG_OPTIONS } from 'src/common/common.constants';
import { EmailVar, MailModuleOptions } from './mail.interfaces';
import got from 'got';
import * as FormData from 'form-data';
import { Buffer } from 'buffer';

@Injectable()
export class MailService {
  constructor(
    @Inject(CONFIG_OPTIONS) private readonly options: MailModuleOptions,
  ) {}

  private async sendEmail(
    subject: string,
    teamplate: string,
    emailVars: EmailVar[],
  ) {
    let code = '';
    emailVars.forEach((eVar) => {
      if (eVar.key === 'code') {
        code = eVar.value;
      }
    });
    const content = `Hello. Please verify your code : ${code}`;
    const form = new FormData();
    form.append('from', `MJ from Nuber Eats <mailgun@${this.options.domain}>`);
    form.append('to', `gi6238@naver.com`);
    form.append('subject', subject);
    form.append('text', content);
    try {
      await got(`https://api.mailgun.net/v3/${this.options.domain}/messages`, {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `api:${this.options.apiKey}`,
          ).toString('base64')}`,
        },
        method: 'POST',
        body: form,
      });
    } catch (e) {
      console.log(e);
    }
  }
  sendVerificationEmail(email: string, code: string) {
    this.sendEmail('Verify Your Email', 'verify-email', [
      {
        key: 'code',
        value: code,
      },
    ]);
  }
}
