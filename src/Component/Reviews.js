import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";

export default function Reviews() {
  const [isFollowed1, setIsFollowed1] = React.useState(false);
  const [isFollowed2, setIsFollowed2] = React.useState(false);
  const [isFollowed3, setIsFollowed3] = React.useState(false);
  const [isFollowed4, setIsFollowed4] = React.useState(false);
  const [isFollowed5, setIsFollowed5] = React.useState(false);
  const [isFollowed6, setIsFollowed6] = React.useState(false);
  const [isFollowed7, setIsFollowed7] = React.useState(false);
  const [isFollowed8, setIsFollowed8] = React.useState(false);

  return (
<Container>
   <Row>
    <b>Customer reviews</b>

    <Col>  
    <br></br> <br></br> <br></br> <br></br>
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Manjot Singh</h4>
            <h5 className="text-small tracking-tight text-default-400">@laalparna_official</h5>
          </div>
        </div>
        <Button
          className={isFollowed1 ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed1 ? "bordered" : "solid"}
          onPress={() => setIsFollowed1(!isFollowed1)}
        >
          {isFollowed1 ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          Frontend developer Join me on this coding adventure!
        </p>
        <span clas  sName="pt-2">
          #FrontendWithManjot
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">10K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
    </Col> 

    <Col>
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Raman</h4>
            <h5 className="text-small tracking-tight text-default-400">@deep_singh</h5>
          </div>
        </div>
        <Button
          className={isFollowed2 ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed2 ? "bordered" : "solid"}
          onPress={() => setIsFollowed2(!isFollowed2)}
        >
          {isFollowed2 ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          Boat 161 earpodes is best.
        </p>
        <span className="pt-2">
          #backend_master
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">10</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">5K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
    </Col>

    <Col>
    <br></br> <br></br> <br></br> <br></br>
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Komal</h4>
            <h5 className="text-small tracking-tight text-default-400">@Kaur_preet</h5>
          </div>
        </div>
        <Button
          className={isFollowed3 ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed3 ? "bordered" : "solid"}
          onPress={() => setIsFollowed3(!isFollowed3)}
        >
          {isFollowed3 ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          avante bar problem in charging port.
        </p>
        <span className="pt-2">
          #Composer 
          <span className="py-2" aria-label="computer" role="img">
            
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">120</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">11K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
    </Col>

    <Col>
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Neeraj</h4>
            <h5 className="text-small tracking-tight text-default-400">@neeraj</h5>
          </div>
        </div>
        <Button
          className={isFollowed4 ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed4 ? "bordered" : "solid"}
          onPress={() => setIsFollowed4(!isFollowed4)}
        >
          {isFollowed4 ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
        I found same empty box complaint over internet and Twitter also with other customers request you to save your money time energy peace of other trusted online portal
        </p>
        <span className="pt-2">
          #Fullstack_developer
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">46</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">800</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
    </Col>

    <Col>  
    <br></br> <br></br> <br></br> <br></br>
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Vishab</h4>
            <h5 className="text-small tracking-tight text-default-400">@Baaj</h5>
          </div>
        </div>
        <Button
          className={isFollowed5 ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed5 ? "bordered" : "solid"}
          onPress={() => setIsFollowed5(!isFollowed5)}
        >
          {isFollowed5 ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          boat 181 is the best earpodes.
        </p>
        <span className="pt-2">
          #justiceformoosewala
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">40</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">15K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
    </Col> 

    <Col>
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Rohit</h4>
            <h5 className="text-small tracking-tight text-default-400">@official_rohu</h5>
          </div>
        </div>
        <Button
          className={isFollowed6 ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed6 ? "bordered" : "solid"}
          onPress={() => setIsFollowed6(!isFollowed6)}
        >
          {isFollowed6 ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          Product broke at such a point it should not break in the first month.
        </p>
        <span className="pt-2">
          #musician
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">78</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">12.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
    </Col>

    <Col>
    <br></br> <br></br> <br></br> <br></br>
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Anya</h4>
            <h5 className="text-small tracking-tight text-default-400">@angel_anya</h5>
          </div>
        </div>
        <Button
          className={isFollowed7 ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed7 ? "bordered" : "solid"}
          onPress={() => setIsFollowed7(!isFollowed7)}
        >
          {isFollowed7 ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          I bought fire bolt Phoenix smart watch in February month 2023.
          i felt great experience with the device.
        </p>
        <span className="pt-2">
          #feeltherumi
          
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">10</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">71K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
    </Col>

    <Col>
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Harman</h4>
            <h5 className="text-small tracking-tight text-default-400">@harman05</h5>
          </div>
        </div>
        <Button
          className={isFollowed8 ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed8 ? "bordered" : "solid"}
          onPress={() => setIsFollowed8(!isFollowed8)}
        >
          {isFollowed8 ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          I am telling within my experience after sale services is the great company.
        </p>
        <span className="pt-2">
          #Seller 
          <span className="py-2" aria-label="computer" role="img">
            
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">155</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">9561K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
    </Col>

   </Row>
</Container>    
  );
}
