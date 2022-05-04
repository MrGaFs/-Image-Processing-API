import sharp from 'sharp';
import {promises as fs} from 'fs';

class ImageScaler {
	inputFile: string;
	hight: number;
	width: number;
	constructor(iF: string, hi: number, wi: number) {
		this.inputFile = iF;
		this.hight = hi;
		this.width = wi;
	}
	private async exist(path:string):Promise<boolean>{
		try{
			await fs.access(path);
			return true;
		}
		catch{
			return false;
		}
	}
	private getOriginalFile():string{
		return `assets/full/${this.inputFile}.jpg`;
	}
	private getScaledVersion():string{
		return `assets/thumb/${this.inputFile}_thumb${this.hight}X${this.width}.jpg`;
	}
	private async isExist():Promise<boolean>{
		return  await this.exist(this.getScaledVersion());
	}
	private async scaleImg(){
		await sharp(this.getOriginalFile()).resize({ height: this.hight, width: this.width })
		.toFile(this.getScaledVersion())
			.catch(function (err) {
				throw new Error(`this img didn't convert \n ${err}`);
			});
	}
	public async scale():Promise<[string, boolean]>{
		if(!(await this.exist(this.getOriginalFile())))
			throw new Error(`This img not in the database`);
		const isExist = await this.isExist();
		if(!isExist)
			await this.scaleImg();
		return [this.getScaledVersion(), isExist];
	}

}
const scaleImage = (inputFile: string, hight: number, width: number): string => {
	let outPut = ``;
	return outPut;
}
export default ImageScaler;