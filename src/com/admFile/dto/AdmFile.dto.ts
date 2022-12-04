import {
  IsNotEmpty,
  IsString,
  MaxLength,
  Matches,
  IsOptional,
  IsNumber,
} from 'class-validator';

export class AdmFileDto {
  @IsOptional()
  @MaxLength(100)
  readonly file_key?: string;

  @IsNotEmpty()
  @MaxLength(10)
  readonly internal_div_cd?: string;

  @IsNotEmpty()
  @Matches(/^[a-z0-9_-]*$/)
  @MaxLength(100)
  readonly file_id?: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  readonly file_name?: string;

  @IsOptional()
  @IsNumber()
  readonly file_sequence!: number;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  readonly file_desc!: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(1)
  readonly use_yn?: string;
}