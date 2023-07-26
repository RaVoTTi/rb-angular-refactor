import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from '../../services/settings.service';
import { ValidatorsService } from 'projects/auth-user/src/public-api';
import { ICashback } from 'interfaces/ICashback';
import { take } from 'rxjs';
// BTC: /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/,
// ETH: /^0x[a-fA-F0-9]{40}$/,
// XRP: /^r[0-9a-zA-Z]{24,34}$/,
// LTC: /^[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}$/,
// BCH: /^[qQ][a-zA-Z0-9]{41}$/,
// EOS: /^EOS[a-zA-Z0-9]{40}$/,
// XLM: /^G[A-Z0-9]{55}$/,
// ADA: /^DdzFFzCqrh...$/,
// XMR: /^4[0-9AB][1-9A-HJ-NP-Za-km-z]{93}$/,
// DASH: /^X[1-9A-HJ-NP-Za-km-z]{33}$/,

@Component({
  selector: 'lib-cashback',
  templateUrl: './cashback.component.html',
  styleUrls: ['./cashback.component.scss'],
})
export class CashbackComponent implements OnInit {
  cryptoForm!: FormGroup;
  cryptosDic: { [key: string]: string } = {
    BTC: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    ETH: '0x5B67871C3a857dE81EdFA2Faa470e0AE2F336967',
    XRP: 'rPVMhWBsfF9iMXYj3aAzJVkPDTFNSyWdKy',
    LTC: 'LhN9LJ5VxZP9x3V2B9nVJaPLrV5TAbSBaW',
    BCH: '1BpEi6DfDAUFd7GtittLSdBeYJvcoaVggu',
    EOS: 'eosioaccount1',
    XLM: 'GBHFRPSD3TQALUZ32XUR7PDPIQSWZY2XK3AGIYU4JSZ6OJRN2MZQXSHF',
    ADA: 'DdzFFzCqrhstZSL3jhxQrZsZxcZ4CvC5w7jqxrYRVr7fZWhYWWRPjST1F5T8TUaVeSFdXGZtbewRNzwt4ZstfhZixToW78ayiSe6kpyz',
    XMR: '49tDSd1aq5hRRXXa3yV6a3kmGZ9UTRkbof9BZ32vykWrPR52L6GcP4S1UF8JCPjAmLDt3Kehb8XX5q5LG6vskPZh9mVe7Y4',
    DASH: 'Xhcc6qFhWfP5vdPnE1Ax6WdZ9MAv7xh1rW',
    DEFAULT: '0000000000000000',
  };

  cryptosArray = [
    'BTC',
    'ETH',
    'XRP',
    'LTC',
    'BCH',
    'EOS',
    'XLM',
    'ADA',
    'XMR',
    'DASH',
  ];
  total: number = 0

  constructor(
    private formBuilder: FormBuilder,
    private vs: ValidatorsService,
    private settingsService: SettingsService,
  ) {
    this._initForm();
  }
  ngOnInit() {
    this.settingsService
      .getCashbackTotal()
      .pipe(take(1))
      .subscribe((response) => {
        this.total = response.result || 0;

      });
  }

  private _initForm() {
    this.cryptoForm = this.formBuilder.group({
      type: ['', [Validators.required, this.vs.isNotIn(this.cryptosArray)]],
      wallet: ['', Validators.required, this.vs.validatePat('ETH')],
    });
  }
  getPlaceHolder() {
    return this.cryptosDic[this.cryptoForm.value.type || 'DEFAULT'];
  }

 
  claimCashback() {
    if (this.cryptoForm.invalid && this.total > 0) {
      this.cryptoForm.markAllAsTouched();
      return;
    }
    this.cryptoForm.disable();
    const { type, wallet } = this.cryptoForm.value as ICashback;

    this.settingsService.putCashback({ type, wallet }).subscribe((Response) => {

    });
    setTimeout(() => {
      this.cryptoForm.enable();
    });
  }
}
