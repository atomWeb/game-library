import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { GamePlatforms } from '../interfaces/game-platforms.interface';
import { GameserviceService } from '../services/gameservice.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css'],
})
export class AddGameComponent implements OnInit {
  addGameForm!: FormGroup;
  image64!: string;
  platforms: GamePlatforms[] = [
    { code: 'PS4', desc: 'PlayStation 4' },
    { code: 'NSW', desc: 'Nintendo Switch' },
    { code: 'PS3', desc: 'PlayStation 3' },
    { code: '3DS', desc: 'Nintendo 3DS' },
    { code: 'PSV', desc: 'PlayStation Vita' },
  ];

  constructor(private fb: FormBuilder, private gameServ: GameserviceService) {}

  ngOnInit() {
    this.addGameForm = this.fb.group({
      gameImage: ['', [Validators.required]],
      platform: ['', [Validators.required]],
      boughtAt: [new Date(), [Validators.required]],
      gameName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(60),
        ],
      ],
      encoded64Image: [''],
      description: [''],
      uid: [''],
    });
  }

  onSubmit() {
    const date = new Date(this.addGameForm.value.boughtAt);
    const userArr = localStorage.getItem('auth-user')?.split("|") || "";
    const userProfileId = userArr[1];
    this.addGameForm.patchValue({
      encoded64Image: this.image64,
      boughtAt: date.toISOString(),
      uid: userProfileId,
    });
    console.log(this.addGameForm.value);
    this.gameServ.createGame(this.addGameForm.value).subscribe((resp) => {
      console.log('Resp post add-game ', JSON.stringify(resp));
      this.resetForm();
      // snack o dialogo bar para mostrar el alta correcta
    });
  }

  resetForm() {
    this.image64 = '';
    this.addGameForm.reset();
    for (const key in this.addGameForm.controls) {
      // console.log(key);
      this.addGameForm.get(key)?.clearValidators();
      this.addGameForm.get(key)?.updateValueAndValidity();
    }
    // this.addGameForm.controls['gameName'].clearValidators();
    // this.addGameForm.controls['gameName'].updateValueAndValidity();
  }
}
