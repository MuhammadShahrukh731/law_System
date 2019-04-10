import React, {Component} from "react";
import Laws from "../header/laws";

import ControlledCarousel from "../slider/carousel";
import Footer from "../header/footer";
import Signin from "../header/signin";
import Table  from "../header/table";
import * as firebase from 'firebase';
import Signup from "../header/signup";
import { Button, ButtonToolbar, Grid, Row, Col} from 'react-bootstrap';
import Header from "../header/header";
const db = firebase.database();

class Search extends Component {
    constructor(props) {        
        super(props);
        this.state = {
            laws : [],
            showData : false,
            searchText:''
        };
    }

    showData(){
        this.setState({showData: true})
    }
    onChange(e){
        this.setState({searchText:e.target.value});
    }

    componentWillMount(){
        //     let law = [{Offences : 'Destroying, damaging or defiling place of worship, or sacred object with intent to insult the religion of any class',
        //                 bailable : 'bailable',
        //                 compoundable : 'Not compoundable',
        //                 Punishment : 'Imprisonment of either description for 2 years or fine or both',
        //                 description: 'er destroys, damages or defiles any place of worship, or any object held sacred by any class of persons with the intention of thereby insulting the religion of any class of persons or with the knowledge that any class of persons is likely to consider such destruction damage or defilement as an insult to their religion. shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both'
        //
        //     },
        //         {Offences : 'Malicious insulting the religion or religious feelings of any class',
        //             bailable : 'Not bailable',
        //             compoundable : 'Not compoundable',
        //             Punishment : 'Imprisonment of either description for 10 years or fine or both',
        //             description: 'Whoever, with deliberate and malicious intention of outraging the \'religious feelings of any class of the citizens of Pakistan, by words, either spoken or written, or by visible representations insults the religion or the religious beliefs of that class, shall be punished with imprisonment of either description for a term which may extend to ten years, or with fine, or with both. Sec. 295-A ins. by the Criminal Law (Amendment) Act, XXV of 1927'
        //
        //         },
        //         {Offences : 'Defiling, etc., of Holy Quran',
        //             bailable : 'Not bailable',
        //             compoundable : 'Not compoundable',
        //             Punishment : 'Imprisonment for life',
        //             description: 'Whoever wilfully defiles, damages or desecrates a copy of the Holy Qur\'an or of an extract therefrom or uses it in any derogatory manner or for any unlawful purpose shall be punishable with imprisonment for life. Sec. 295-B added by P.P.C. (Amendment) Ordinance, I of 1982'
        //
        //         },
        //         {Offences : 'Using derogatory remarks, etc., in respect of the Holy Prophet',
        //             bailable : 'Not bailable',
        //             compoundable : 'Not compoundable',
        //             Punishment : 'Imprisonment for life and fine',
        //             description: 'Whoever by words, either spoken or written, or by visible representation or by any imputation, innuendo, or insinuation, directly or indirectly, defiles the sacred name of the Holy Prophet Muhammad (peace be upon him) shall be punished with death, or imprisonment for life, and shall also be liable to fine. Sec. 295-C ins. by the Criminal Law (amendment) Act, 111 of 1986, S.2'
        //
        //         },
        //         {Offences : 'Causing disturbing to an assembly engaged in religious worship',
        //             bailable : 'Bailable',
        //             compoundable : 'Not compoundable',
        //             Punishment : 'Imprisonment for life and fine',
        //             description: 'Whoever voluntarily causes disturbance to any assembly lawfully engaged in the performance of religious worship, or religious ceremonies, shall be punished with imprisonment of either description for a term which may extend to one year, or with fine, or with both.'
        //
        //         },
        //         {Offences : 'Trespassing in place of worship or sculpture, disturbing funereal with intention to wound the feelings or to insult the religion of any person or offering indignity to human corpse, on burial places, etc',
        //             bailable : 'bailable',
        //             compoundable : 'Not compoundable',
        //             Punishment : 'Imprisonment of either description for 1 year or fine or both',
        //             description: 'with the intention of wounding the feelings of any person, or of insulting the religion of any person, or with the knowledge that the feelings of any person are likely to be wounded, or that the religion of any person is likely to be insulted thereby,commits any trespass in any place of worship or on any place of sculpture, or any place set apart for the performanceof funeral rites or as a, depository for the remains of the dead, or offers any indignity to any human corpse or causes disturbance to any persons assembled for the performance of funeral ceremonies,shall be punished with imprisonment of either description for a term which may extend to one year, or with fine, or with both'
        //
        //         },
        //         {Offences : 'Uttering any word or making any sound in hearing or making any gesture or placing any object in sight of any person with intention to wound his religious feelings',
        //             bailable : 'bailable',
        //             compoundable : 'Compoundable',
        //             Punishment : 'Imprisonment of either description for 1 year or fine or both',
        //             description: 'with the deliberate intention of wounding the religious feelings of any person, utters any word or makes any sound in the hearing of that person or makes any gesture in the sight of that person or places any object in the sight of that person, shall be punished with imprisonment of either description for a term which may extend to one year or with fine, or with both'
        //
        //         },
        //         {Offences : 'Use of derogatory remarks, etc. in respect of holy personages',
        //             bailable : 'bailable',
        //             compoundable : 'Not compoundable',
        //             Punishment : 'Imprisonment of either description for 3 years or fine or both',
        //             description: 'Whoever by words, either spoken or written, or by visible representation, or by any imputation, innuendo or insinuation, directly or indirectly, defiles the sacred name of any wife (Ummul Mumineen), or members of the family (Ahle-bait), of the Holy Prophet (peace be upon him), or any of the righteous Caliphs (Khulafa-e-Rashideen) or companions (Sahaaba) of the Holy Prophet (peace be upon him) shall be punished with imprisonment of either description for a term which may extend to three years, or with fine, or with both. Sec. 298-A added by the Pakistan Penal Code (Second Amendment) Ordinance, XLIV of 1980'
        //
        //         },
        //         {Offences : 'Misuse of epithets, descriptions and titles, etc. reserved for certain holy personages or places',
        //             bailable : 'Not bailable',
        //             compoundable : 'Not compoundable',
        //             Punishment : 'Imprisonment of either description for 2 years and fine',
        //             description: '(1) Any person of the Quadiani group or the Lahori group (who call themselves \'Ahmadis\' or by any other name who by words, either spoken or written, or by visible representation(a) refers to or addresses, any person, other than a Caliph or companion of the Holy Prophet Muhammad (peace be upon him), as "Ameer-ul-Mumineen", "KhalifatulMumineen", Khalifa-tul-Muslimeen", "Sahaabi" or "Razi Allah Anho"; (b) refers to, or addresses, any person, other than a wife of the Holy Prophet Muhammad (peace bi upon him), as "Ummul-Mumineen"; (c) refers to, or addresses, any person, other than a member of the family "Ahle-bait" of the Holy Prophet Muhammad (peace be upon him), as "Ahle-baft"; or (d) refers to, or names, or calls, his place of worship a "Masjid"; shall be punished with imprisonment of either description for a term which may extend to three years, and shall also be liable to fine. (2) Any person of the Qaudiani group or Lahori group (who call themselves "Ahmadis" or by any other name) who by words, either spoken or written, or by visible representation refers to the mode or form of call to prayers followed by his faith as "Azan", or recites Azan as used by the Muslims, shall be punished with imprisonment of either description for a term which may extend to three years, and shall also be liable to fine. Sec. 298-B ins. by Anti-lslamic Activities of Quadiani Group, Lahori Group and Ahmadis (Prohibition and Punishment) Ordinance, XX of 1984'
        //
        //         },
        //         {Offences : 'Person of Quadiani group, etc., calling himself a Muslim or preaching or propagating his faith ',
        //             bailable : 'Not bailable',
        //             compoundable : 'Not compoundable',
        //             Punishment : 'Imprisonment of either description for 2 years and fine',
        //             description: 'Any person of the Quadiani group or the Lahori group (who call themselves \'Ahmadis\' or by any other name), who directly or indirectly, poses himself as a Muslim, or calls, or refers to, his faith as Islam, or preaches or propagates his faith, or invites others to accept his faith, by words, either spoken or written, or by visible representations, or in any manner whatsoever outrages the religious feelings of Muslims shall be punished with imprisonment of either description for a term which may extend to three years and shall also be liable to fine. Sec. 298-C. ins. by the Anti-Islamic Activities of Quadiani Group, Lahori Group and Ahmadis (Prohibition and Punishment) Ordinance, XX of 1984'
        //
        //         },
        //         {Offences : ' Qatl-e-Amd',
        //             bailable : 'Not bailable',
        //             compoundable : 'Not compoundable',
        //             Punishment : 'likhna he isme',
        //             description: 'Whoever, with the intention of causing death or with the intention of causing bodily injury to a person, by doing an act which in the ordinary course of nature is likely to cause death, or with-the knowledge that his act is so imminently dangerous that it must in all probability cause death, causes the death of such person, is said to commit qatl-e-amd'
        //
        //         },
        //         {Offences : 'Causing death of person other than the person whose death was intended',
        //             bailable : 'likhna he',
        //             compoundable : 'likhna he',
        //             Punishment : 'likhna he',
        //             description: 'Where a person, by doing anything which he intends or knows to be likely to cause death, causes death of any person whose death he neither intends nor knows himself to be likely to cause, such an act committed by the offender shall be liable for qatl-i-amd'
        //
        //         },
        //         {Offences : 'Punishment of qatl-i-amd',
        //             bailable : 'Not bailable',
        //             compoundable : 'Not compoundable',
        //             Punishment : 'Qisa or death, imprisonment for life or imprisonment up to 25 years',
        //             description: 'Whoever commits qatl-e-amd shall, subject to the provisions of this Chapter be: (a) punished with death as qisas; (b) punished with death for imprisonment for life as ta\'zir having regard to the facts and circumstances of the case, if the proof in either of the forms specified in Section 304 is not available; or (c) punished with imprisonment of either description for a term which may extend to twenty-five years, where according to the Injunctions of Islam the punishment of qisas is tot applicable'
        //
        //         },
        //         {Offences : 'Qatl committed under ikrah-i-tam or ikrah-i-naqis',
        //             bailable : 'Not bailable',
        //             compoundable : 'Not compoundable',
        //             Punishment : 'Imprisonment of either description for 25 years but not less than 10 years',
        //             description: '(a) under Ikrah-i-tam shall be punished with imprisonment for a term which may extend to twenty-five years but shall not be less than ten years and the person causing \'ikrah-i-tam\' shall be punished for the \'.kind of Qatl committed as a consequence of ikrah-i-tam; or (b) under \'ikrah-i-naqis\' shall be punished for the kind of Qatl committed by him and the person, causing \'ikrah-i-naqis, shall be punished with imprisonment for a term which may extend to ten years'
        //
        //         },
        //         {Offences : 'Proof of qatl-i-amd liable to qisas, etc',
        //             bailable : 'Not bailable',
        //             compoundable : 'likhna he',
        //             Punishment : 'likhna he',
        //             description: '(1) Proof of qatl-i-amd shall be in any of the following forms, namely: - (a) the accused makes before a Court competent to try the offence a voluntary and true confession of the commission of the offence; or (b) by the evidence as provided in Article 17 of the Qanun-e-Shalladat, 1984 (P.O. No. 10 of 1984). (2) The provisions of sub-section (1) shall, mutatis, mutandis, apply to a hurt liable to qisas'
        //
        //         }
        //     ];
        //     law.map((ele)=>{
        //         db.ref('criminal').push(
        //             ele
        //         );
        //     });

        let arr = [];
        let laws = db.ref('criminal/');
        laws.on('value', (snapshot)=> {
            let obj = snapshot.val();

            for(var key in obj){
                // console.log(obj[key].Punishment,'keyyyyyyyyyyyyyyyyyyyyyy');
                arr.push(obj[key])
            }
            this.setState({laws: arr},()=>{this.showData.bind(this)})
        });

    }

    render() {

        return (
            <div>
                 
                                <Grid>
                    <Row className="show-grid">
                                           </Row>
                </Grid>;
                {/* <h1>Criminal page Law </h1> */}
<hr/>
                <div>
                    <input onChange={this.onChange.bind(this)} placeholder={"Search    Any Law"} type="text" name="search" />
                </div>
                <hr/>
                {this.state.searchText ? this.state.laws.filter((ele)=>{
                    console.log(ele,'kkkkkkkkkkkkkkkkkk');
                    return ele.Offences.indexOf(this.state.searchText) > 1;
                }).map((ele,i)=>{
                    console.log(ele,'jjjjjhhhhhhhhhsssssssssssss')
                    return (
                        <div key={i}>
                            <h1>{ele.Offences}</h1>
                            <p><span> <b>Punishment : </b> </span> {ele.Punishment}</p>
                            <p><span> <b>bailable : </b> </span> {ele.bailable}</p>
                            <p><span> <b>compoundable : </b> </span> {ele.compoundable}</p>
                            <p><span> <b>description : </b> </span> {ele.description}</p>
                        </div>
                    )
                }) : this.state.laws.map((el, i) => {
                    return (
                        <div style={{textAlign: 'left'}} key={i}>
                        
<div className="container-fluid">
<div className="container-fluid  bg-success text-white text-left bd">
                            <h4><span> <b>Offences : </b> </span> {el.Offences}</h4>
                            <h4><span> <b>Punishment : </b> </span> {el.Punishment}</h4>
                            <h4><span> <b>bailable : </b> </span> {el.bailable}</h4>
                            <h4><span> <b>compoundable : </b> </span> {el.compoundable}</h4>
                            <h4><span> <b>description : </b> </span> {el.description}</h4>
                            <hr/>

                        </div>
    </div>
    </div>                
                    )
                })

}



               

            </div>
        );




    }
}

export default Search;
