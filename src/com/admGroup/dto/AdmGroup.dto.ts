import {
  IsNotEmpty,
  IsString,
  MaxLength,
  Matches,
  IsOptional,
  MinLength,
} from 'class-validator';

export class AdmGroupDto {
  @IsOptional()
  @MaxLength(100)
  readonly group_key?: string;

  @IsOptional()
  @MaxLength(10)
  readonly internal_div_cd?: string;

  @IsNotEmpty()
  @Matches(/^[a-z0-9_-]*$/)
  @MaxLength(100)
  readonly group_id?: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  readonly group_name?: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  readonly group_desc!: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(1)
  readonly use_yn?: string;
}