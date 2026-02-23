export type User = {
  birthDate: string
  country: string
  created_at: string
  dni: string
  email: string
  email_verified_at: string | null
  gender: 'male' | 'female' | 'other'
  id?: number
  identification: 'dni' | 'passport' | 'nie'
  locality: string
  maritalStatus: 'single' | 'married' | 'divorced' | 'widower' | 'other'
  name: string
  nationality: string
  phone: string
  province: string
  residence: string
  surname: string
  updated_at: string
  zipCode: string
}
