export interface ButtonInterface{
	children :any,
	requestPath :string,
	onClick : string
	

}
export interface InputInterface{
	label:string,
  placeholder:string,
  type: string,
  value:string,
  handleInputChange:Function,
  required:boolean
}