import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CampaignCard = ({ campaign }) => {
  console.log("campaign", campaign);

  const navigate = useNavigate()

  const onclickHandelar=(id)=>{
    console.log("click",id)
    navigate(`/donation/${id}`)
  }

  return (
    <div className="px-1">
      <Card className="text-left campaign_card my-[14px]">
        <Card.Img
          variant="top"
          src={`http://localhost:8008/uploads/latestcampaign/${campaign.image}`}
          alt={campaign.image} 
          className="h-[280px]"
        />
        <div className="px-3">
          <Card.Body>
            <Card.Title className="Title my-4">{campaign.title}</Card.Title>
            <Card.Text className="Desc">{campaign.description}</Card.Text>

            <div className="flex gap-5 my-10">
              <Button variant="primary" onClick={()=>onclickHandelar(campaign._id)}>DONATE NOW</Button>
              <p className="my-auto">{campaign.days}</p>
            </div>
            <hr />
            <div className="d-flex justify-between">
              <div>
                <p>Raised</p>
                <p>{campaign.raised}</p>
              </div>
              <div>
                <p>Goal</p>
                <p>{campaign.goal}</p>
              </div>
              <div>
                <p>Donor</p>
                <p>{campaign.donor}</p>
              </div>
            </div>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default CampaignCard;
