import React, { useDebugValue, useState } from "react"
import Header from './Header'
import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {getCarData} from '../contexts/getCarData';

export default function Recalls() {
    const options = ['A1 TOWING LTD', 'ADMIRAL TRAILERS', 'AGCO SAS',
    'AJS MOTORCYCLES LTD', 'AL-KO KOBER', 'ALEXANDER',
    'ALEXANDER DENNIS', 'ALFA ROMEO', 'ALLIANCE TIRE CO LTD',
    'ALLIED VEHICLES', 'ALPINA', 'ANDOVER TRAILERS LIMITED', 'ANTEO',
    'APEC', 'APOLLO VREDESTEIN', 'APRILIA', 'ARCTIC CAT ',
    'ARIEL MOTOR CO.', 'ARVINMERITOR', 'ASTON MARTIN', 'ATWOOD',
    'AUDI', 'AUTO-SLEEPERS LTD', 'AUTO-TRAIL', 'AUTO-TRAIL ',
    'AUTOCRUISE AND PIONEER', 'AUTOGAS 2000', 'AUTOGLASS LTD', 'AVIA',
    'AVON', 'AVONDALE', 'AYATS', 'BAILEY', 'BALCO', 'BAOTIAN',
    'BARRUS', 'BATESON TRAILERS LTD', 'BCA VEHICLE SERVICES LTD',
    'BCE (UK)LTD', 'BEARMACH', 'BEASON COOKE', 'BELRON', 'BENELLI',
    'BENTLEY', 'BENTLEY MOTOR CARS', 'BERKHOF', 'BETAMOTOR', 'BIG D',
    'BILBOS DESIGN', 'BMC', 'BMW', 'BMW MOTORRAD',
    'BOCKMANN FAHRZEUGWERKE GMBH', 'BOTT LTD', 'BOVA',
    'BRAUNABILITY EUROPE AB', 'BRC (GB) LTD', 'BREMBO S.P.A.',
    'BRIDGESTONE', 'BRINK INTERNATIONAL', 'BRINK TOWING SYSTEMS BV',
    'BRITAX', 'BRP (CAN-AM.)', 'BUELL', 'BUERSTNER UK',
    'BUGATTI AUTOMOBILES SAS', 'BURSTNER', 'BYD', 'C I MOTORHOMES',
    'CADILLAC', 'CALNE TOOLING', 'CAN-AM',
    'CAN-AM OUTLANDER AND RENEGADE', 'CAN-AM.', 'CAROSPEED',
    'CATERHAM CARS', 'CCM', 'CHARLES PUGH (GLASS) LTD',
    'CHARLTON BODIES LTD', 'CHASSIS DEVELOPMENT SERVICES',
    'CHEVROLET UK', 'CHEVROLET USA', 'CHIEFTAIN TRAILERS LTD',
    'CHRYSLER', 'CHRYSLER UK LTD', 'CITATION', 'CITROEN', 'CLAAS',
    'CLAAS TRACTOR SAS', 'COBRA', 'COLEMAN - MILNE', 'CONTINENTAL',
    'COOPER', 'COOPER BUSSMANN (UK) LTD', 'COOPER TIRE ', 'COSATTO',
    'CPI', 'CRANES UK LTD', 'DACIA', 'DAEWOO', 'DAF', 'DAF BUS',
    'DAHON - FISHER OUTDOOR LEISURE', 'DAIHATSU', 'DAWES CYCLES LTD',
    'DECATHLON ', 'DECATHLON SA', 'DEL EQUIPMENT (UK) LMITED',
    'DEL EQUIPMENT (UK) LTD', 'DELPHI', 'DENNIS', 'DENNIS EAGLE',
    'DETHLEFFS', 'DINEX', 'DISC-LOCK ', 'DIXON & BATE LTD', 'DODGE',
    'DOMETIC GMBH', 'DOMETIC WAECO INT GMBH', 'DON', 'DON-BUR', 'DS',
    'DUCATI', 'DUNNES STORES', 'E-Z-GO', 'EAST LANCS', 'EASTON',
    'EBERSPACHER SUTRAK SA', 'EDMUND EVANS', 'ELAP ENGINEERING LTD',
    'ELECSCOOT', 'EMC EUROPE LTD', 'ENFIELD', 'ERF',
    'ERWIN HYMER GROUP UK LTD', 'EUROPEAN BRAKING SYSTEMS LTD',
    'EVOBUS', 'FASTER BY DESIGN', 'FEDERAL MOGUL',
    'FEDERAL MOGUL GLOBAL', 'FENDT', 'FENDT-CARAVAN GMBH', 'FERODO',
    'FERRARI', 'FIAT', 'FIRST LINE LTD', 'FISHER OUTDOOR PRODUCTS LTD',
    'FLYING SPARES LTD ', 'FODEN', 'FONTAINE', 'FORD', 'FRUEHAUF',
    'FUSO', 'GARMIN', 'GAS GAS', 'GEIST', 'GENERAL MOTORS CO LLC',
    'GENERAL TRAILERS', 'GENERIC', 'GILERA', 'GOINGREEN UK',
    'GOODYEAR', 'GOWERINGS MOBILITY LTD', 'GRACO', 'GRAFTON TRAILERS',
    'GRANNING', 'GRAY & ADAMS', 'GREAT WALL', 'GREEN MACHINES',
    'GTMC ENTERTAINMENT LTD', 'HALDEX', 'HANKOOK ', 'HARDSTAFF OIGI',
    'HARLEY DAVIDSON', 'HAWK CYCLES', 'HEDKASE', 'HEIL TRAILERS',
    'HERALD', 'HERCULES TIRE', 'HILO', 'HINO', 'HJS', 'HOBBY CARAVANS',
    'HOLDER', 'HONDA', 'HONDA MOTORCYCLES', 'HONDA POWER EQUIPMENT',
    'HONEYWELL', 'HOTLINES EUROPE LTD', 'HUMBAUR', 'HUMMER',
    'HUSABERG', 'HUSQVARNA MOTORCYCLES LTD',
    'HYMER - LOWDHAM LEISURE WORLD', 'HYMER GMBH & CO KG',
    'HYMER UK LTD', 'HYOSUNG', 'HYUNDAI', 'HYVA', 'IFOR WILLIAMS',
    'INDESPENSION', 'INDIAN MOTORCYCLE COMPANY', 'INFINITI', 'IRISBUS',
    'ISRINGHAUSEN (GB)LTD', 'ISUZU', 'ISUZU TRUCK', 'IVECO',
    'IVECO BUS', 'J & S COMPONENT ENG LTD', 'JACK BARCLAY LTD',
    'JAGUAR', 'JCB', 'JEENAY', 'JEEP', 'JEEP/DODGE', 'JINAN QINGQI',
    'JOHN DEERE', 'JOHNSTON SWEEPERS LTD', 'JONCKHEERE', 'JURATEK LTD',
    'KASSBOHRER', 'KATO', 'KAWASAKI', 'KAWASAKI/ROCKWAY', 'KEEWAY',
    'KIA', 'KLIPPAN', 'KNAUS TABBERT GMBH', 'KNORR BREMSE',
    'KONNEKT AUTO', 'KTM', 'KUBOTA', 'KYMCO', 'Koni B.V',
    'LAMBORGHINI', 'LAMBRETTA', 'LANCIA', 'LAND ROVER', 'LAVERDA',
    'LDV', 'LEVC', 'LEXMOTO', 'LEYLAND', 'LEYLAND DAF',
    'LIBERTY VEHICLE TECHNOLOGIES', 'LIEBHERR', 'LIGIER',
    'LLEXETER LTD', 'LMC AND TEC CARAVANS GMBH',
    'LMC CARAVANS GMBH & CO KG', 'LML ITALIA', 'LOHR', 'LOTUS', 'LTC',
    'LTI', 'LUNAR', 'LVTONG', 'M & G', 'MADISON CYCLES', 'MAN',
    'MAN BUS ', 'MAN TRUCK', 'MANN AND HUMMEL ', 'MARANGONI',
    'MASERATI', 'MASSEY FERGUSON (AGCO)', 'MATHIEU', 'MAVIC', 'MAZDA',
    'MCCORMICK TRACTORS LTD', 'MCLAREN', 'MELLOR', 'MERCEDES BENZ',
    'MERCEDES BENZ BUS', 'MERCEDES-BENZ CARS UK LTD',
    'MERCEDES-BENZ TRUCKS UK LTD', 'MERCEDES-BENZ VANS UK LTD',
    'MERIDA', 'MERITOR HVBS (UK) LTD', 'MERITOR HVS LTD',
    'MERITOR ROR LTD', 'MEYLE', 'MG MOTOR', 'MG ROVER', 'MICHELIN',
    'MINI', 'MITAS TYRES LTD', 'MITSUBISHI', 'MITSUBISHI TRUCK',
    'MONSTEREBIKES', 'MORGAN', 'MOTHERCARE', 'MOTO GUZZI',
    'MUTT MOTORCYCLES', 'MV AGUSTA', 'MV AGUSTA  MOTOR SPA',
    'NELSON STOKES LTD', 'NEOMAN BUS UK', 'NEOPLAN',
    'NGK SPARK PLUG (UK) LTD', 'NIM ENGINEERING LTD', 'NISSAN', 'NMI',
    'NORTON MOTORCYCLES (UK) LTD', 'OHLINS RACING AB', 'OLDBURY UK',
    'OMNIBUS', 'OPTARE', 'ORLANDI', 'OUGHTRED & HARRISON ',
    'PAILTON ENGINEERING LTD', 'PANELTEX LTD',
    'PARAGON VEHICLE SERVICES LTD', 'PEARL AUTOMOTIVES', 'PERODUA',
    'PEUGEOT', 'PEUGEOT MOTORCYCLES ', 'PEUGEOT SCOOTERS', 'PIAGGIO',
    'PIRELLI', 'PLAXTON', 'POLARIS', 'POLESWORTH',
    'POLYPLASTIC BV (NL)', 'PORSCHE', 'POSILOCK', 'POWNALL',
    'PRESTIGE PARTS', 'PRIDEN ENGINEERING LTD', 'PRORAIL', 'PROTON',
    'RAC AUTOWINDSCREENS', 'RALEIGH', 'RALLY DESIGN LTD', 'RAM',
    'RANSOMES JACOBSEN ', 'RAPIDO', 'RATCLIFF TAIL LIFTS', 'RENAULT',
    'RENAULT AGRICULTURE', 'RENAULT TRUCKS UK LTD', 'RENAULT VI',
    'RENAULTTRUCKS UK LTD', 'RENTHAL', 'REWACO', 'RIEJU',
    'ROHILL BODIES LIMITED', 'ROLLS ROYCE', 'ROVER', 'ROYAL ALLOY',
    'ROYAL ENFIELD', 'ROYCE UNION', 'SAAB', 'SAF', 'SAFETEX',
    'SAFETY BELT SOLUTIONS LTD', 'SALVADOR CAETANO', 'SAO',
    'SARGENT ELEC SERV LTD', 'SCANIA BUS', 'SCANIA TRUCK', 'SCARAB',
    'SCHMITZ CARGOBULL UK LTD', 'SCHWALBE', 'SCORPION AUTOMOTIVE LTD',
    'SDC', 'SEA-DOO', 'SEAT', 'SEDDON ATKINSON', 'SEGWAY',
    'SEGWAY INC', 'SETRA', 'SHIMANO', 'SIARR', 'SINNIS', 'SIRUS',
    'SKF SVERIGE AKTIEBOLAG', 'SKODA', 'SOUTHERN TYRE CO LTD',
    'SPECIALIZED', 'SSANGYONG', 'STARCO GB LTD',
    'STEERING DEVELOPMENTS LTD', 'STOVES', 'SUBARU', 'SUPERBYKE',
    'SUZUKI', "SUZUKI M/C'S - D&K IMPORT",
    "SUZUKI M/C'S -KJM  IMPORTS", 'SUZUKI MOTORCYCLES', 'SWIFT',
    'SYM SCOOTERS (ASTRO)', 'SYM SCOOTERS (MOORE)', 'SYM UK', 'TADANO',
    'TATA', 'TEAL ENGINEERING SERVICES LTD', 'TEMSA GLOBAL',
    'TENNECO AUTOMOTIVE', 'TESLA', 'THE EXPLORER GROUP',
    'THE FIFTH WHEEL COMPANY LTD', 'THOMPSONS (UK) LTD',
    'THULE SWEDEN AB', 'TIMBERWOLF', 'TIMKEN', 'TOPRAN', 'TOYAMA',
    'TOYOTA', 'TRAILERTECH', 'TRANSBUS', 'TRAYAL', 'TRIDEC BV.',
    'TRIGANO SPA', 'TRIGANO VDL', 'TRITECH AUTOCRAFT LTD', 'TRIUMPH',
    'TRUCK ALIGN', 'TRUCKSMITH LTD', 'TRUMA GERAETETECHNICK GMBH',
    'TVAC LTD', 'TVR', 'UBCO', 'UNIVERSAL CYCLES', 'UNVI SA',
    'UNWIN SAFETY SYSTEMS', 'URO AUTOSPARES LTD', 'V ORLANDI',
    'VAN HOOL', 'VAUXHALL', 'VDL BUS', 'VECTRIX CORPORATION',
    'VOLVO BUS', 'VOLVO CAR', 'VOLVO TRUCK', 'VW', 'WABCO',
    'WABCO-PERROT', 'WEBASTO', 'WEBASTO ITALY & USA', 'WEIGHTLIFTER',
    'WESTFIELD', 'WINDER BOATS LTD', 'WINNEBAGO INDUSTRIES', 'WITTER',
    'WOOSUNG', 'WORKHORSE CUSTOM CHASSIS', 'WRIGHT BUS', 'WRIGHTBUS',
    'WUYANG', 'YAMAHA', 'YI YING', 'YOKOHAMA', 'ZENOS CARS LTD',
    'ZERO', 'ZERO MOTORCYCLES', 'ZHEJIANG HUATIAN HEV CO. LTD']

    const [value, setValue] = useState();

    const handleChange = (option) => {
        getCarData(option.target.value).then((res) => { 
            console.log(res);
            setValue(res)
        })
    };
  return (
    <div>
        <Header />
        <Form onChange={handleChange}>
            <Form.Group>
                <Form.Label>Car model</Form.Label>
                <Form.Control as="select">
                <Row xs={1} md={2} className="g-4">
                </Row>
                    {options.map((option) => {
                        return <option key={option}>{option}</option>
                    })}
                </Form.Control>
            </Form.Group>
        </Form>
        {value? value.map((issue) => { return (
                                <Col key={issue.id}>
                                <Card>
                                    <Card.Body>
                                    <Card.Title>{issue.data.Model}</Card.Title>
                                    <Card.Text>
                                    {issue.data.Defect}
                                    </Card.Text>
                                    <Card.Text>
                                    {issue.data.Remedy}
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <small className="text-muted">From {issue.data['Build Start']} to {issue.data['Build End']}</small>
                                    </Card.Footer>
                                </Card>
                                </Col>
        )}): ""}
    </div>
  )
}
