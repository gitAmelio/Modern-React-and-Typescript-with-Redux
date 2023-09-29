import Button, { renderIcon } from "./Button";

const StdFilledButtons = () => {
  return (
    <div className=" w-[30%] items-baseline gap-3 p-3 flex flex-col items-center">
      <div>
        <Button >
          {renderIcon('plane')}
          Plain
        </Button>
      </div>
      <div>
        <Button success >
          {renderIcon('bell')}
          Click here!!!
        </Button>
      </div>
      <div>
        <Button danger >
          {renderIcon('down')}
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning >
          {renderIcon('eye')}
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary >
          {renderIcon('palm')}
          Hide Ads
        </Button>
      </div>
      <div>
        <Button primary>
          {renderIcon('box')}
          Something!
        </Button>
      </div>
    </div>
  )
}

export default StdFilledButtons;