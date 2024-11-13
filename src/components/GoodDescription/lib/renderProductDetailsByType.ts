import {ProductInterface} from "@/types/productsTypes";
import {
    RenderComputerDetails,
    RenderLaptopDetails, RenderMusicSpeakerDetails,
    RenderPhoneDetails, RenderTabletDetails, RenderTVDetails
} from "../RenderDetailsComponents/RenderDetailsComponents";

export const renderProductDetailsByType = (product: ProductInterface) => {
    switch (product.type) {
        case 'PHONES':
            return RenderPhoneDetails(product.details);
        case 'LAPTOPS':
            return RenderLaptopDetails(product.details);
        case 'COMPUTERS':
            return RenderComputerDetails(product.details);
        case 'TABLETS':
            return RenderTabletDetails(product.details);
        case 'MUSIC_SPEAKERS':
            return RenderMusicSpeakerDetails(product.details);
        case 'TVS':
            return RenderTVDetails(product.details);
        default:
            return null;
    }
};