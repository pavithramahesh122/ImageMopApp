import { Repository } from 'typeorm';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { Product } from './entities/image.entity';
export declare class ImageService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    create(createProductDto: CreateImageDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    getProductDetails(): Promise<string[]>;
    update(id: number, updateProductDto: UpdateImageDto): Promise<Product>;
    remove(id: number): Promise<void>;
}
