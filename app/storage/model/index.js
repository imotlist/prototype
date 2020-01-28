import {Disposisi} from './Disposisi'
import {DisposisiMasuk} from './disposisi/Masuk'
import {Koreksi} from './Koreksi'
import {KoreksiMasuk} from './koreksi/Masuk'
import {Surat} from './Surat'

const allSchema = () => {
    let schema = [
                    Disposisi,
                    DisposisiMasuk,
                    Koreksi,
                    KoreksiMasuk,
                    Surat
                ];
    return schema;
}

export default allSchema